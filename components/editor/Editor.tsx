'use client';

import { useEffect, useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { ACCEPT_ATTRIBUTE } from '@/config/app';
import {
  buildDelogoArgs,
  inputNameFor,
} from '@/lib/ffmpeg/buildArgs';
import type { JobErrorCode, WorkerResponse } from '@/lib/ffmpeg/messages';
import {
  formatBytes,
  isLargeFile,
  validateFile,
  type FileValidationError,
} from '@/lib/validation';
import { clamp, type Rect, type Size } from '@/lib/coordinates';
import WatermarkSelector from './WatermarkSelector';
import TimeRange from './TimeRange';
import {
  AlertIcon,
  CheckIcon,
  CloseIcon,
  DownloadIcon,
  InfoIcon,
  UploadIcon,
} from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

type Status = 'idle' | 'ready' | 'processing' | 'done' | 'error';
type EditorErrorCode = JobErrorCode | 'noRect' | 'invalidTime';

interface VideoMeta extends Size {
  duration: number;
}

export default function Editor({ dict }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [meta, setMeta] = useState<VideoMeta | null>(null);
  const [rect, setRect] = useState<Rect | null>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [errorCode, setErrorCode] = useState<EditorErrorCode | null>(null);
  const [validationError, setValidationError] = useState<FileValidationError | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [ackLarge, setAckLarge] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [supportsSAB, setSupportsSAB] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const videoUrlRef = useRef<string | null>(null);
  const resultUrlRef = useRef<string | null>(null);

  useEffect(() => {
    setSupportsSAB(typeof SharedArrayBuffer !== 'undefined');
  }, []);

  useEffect(() => {
    videoUrlRef.current = videoUrl;
  }, [videoUrl]);

  useEffect(() => {
    resultUrlRef.current = resultUrl;
  }, [resultUrl]);

  useEffect(() => {
    return () => {
      workerRef.current?.terminate();
      if (videoUrlRef.current) URL.revokeObjectURL(videoUrlRef.current);
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    };
  }, []);

  const selectFile = (next: File | null) => {
    if (!next) return;

    const error = validateFile(next);
    setValidationError(error);
    if (error) {
      return;
    }

    workerRef.current?.terminate();
    workerRef.current = null;

    if (resultUrlRef.current) {
      URL.revokeObjectURL(resultUrlRef.current);
      resultUrlRef.current = null;
    }
    if (videoUrlRef.current) {
      URL.revokeObjectURL(videoUrlRef.current);
    }

    const url = URL.createObjectURL(next);
    videoUrlRef.current = url;

    setFile(next);
    setVideoUrl(url);
    setMeta(null);
    setRect(null);
    setStart(0);
    setEnd(0);
    setCurrentTime(0);
    setResultUrl(null);
    setProgress(0);
    setLogs([]);
    setErrorCode(null);
    setAckLarge(false);
    setStatus('ready');
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    selectFile(event.target.files?.[0] ?? null);
    event.target.value = '';
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    selectFile(event.dataTransfer.files?.[0] ?? null);
  };

  const handleMetadata = (size: Size, duration: number) => {
    setMeta({ width: size.width, height: size.height, duration });
    setStart(0);
    setEnd(duration);
  };

  const clampTime = (value: number): number => {
    const maximum = meta?.duration ?? 0;
    const safe = Number.isFinite(value) ? value : 0;
    return clamp(Number(safe.toFixed(3)), 0, maximum);
  };

  const errorMessage = (code: EditorErrorCode | null): string | null => {
    if (!code) return null;
    return dict.editor.errors[code];
  };

  const stopWorker = () => {
    workerRef.current?.terminate();
    workerRef.current = null;
  };

  const handleProcess = () => {
    if (!file || !meta) return;

    if (!rect || rect.w < 2 || rect.h < 2) {
      setErrorCode('noRect');
      setStatus('error');
      return;
    }

    const safeStart = clampTime(start);
    const safeEnd = clampTime(end);
    if (safeEnd <= safeStart) {
      setErrorCode('invalidTime');
      setStatus('error');
      return;
    }

    setErrorCode(null);
    setProgress(0);
    setLogs([]);
    setStatus('processing');

    const args = buildDelogoArgs({
      inputName: inputNameFor(file.name),
      outputName: 'output.mp4',
      videoWidth: meta.width,
      videoHeight: meta.height,
      rect,
      startTime: safeStart,
      endTime: safeEnd,
    });

    let worker: Worker;
    try {
      worker = new Worker(new URL('../../workers/ffmpeg.worker.ts', import.meta.url), {
        type: 'module',
        name: 'ffmpeg-watermark-worker',
      });
    } catch {
      setErrorCode('unknown');
      setStatus('error');
      return;
    }

    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const message = event.data;

      if (message.type === 'progress') {
        setProgress(message.progress);
      } else if (message.type === 'log') {
        setLogs((previous) => [...previous.slice(-40), message.message]);
      } else if (message.type === 'done') {
        if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
        const url = URL.createObjectURL(message.blob);
        resultUrlRef.current = url;
        setResultUrl(url);
        setProgress(1);
        setStatus('done');
        stopWorker();
      } else if (message.type === 'error') {
        setErrorCode(message.code);
        setStatus('error');
        stopWorker();
      }
    };

    worker.onerror = () => {
      setErrorCode('job');
      setStatus('error');
      stopWorker();
    };

    worker.postMessage({
      type: 'start',
      file,
      inputName: inputNameFor(file.name),
      outputName: 'output.mp4',
      args,
      useMultiThread: supportsSAB,
    });
  };

  const handleCancel = () => {
    stopWorker();
    setStatus('ready');
    setProgress(0);
    setErrorCode(null);
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const anchor = document.createElement('a');
    anchor.href = resultUrl;
    anchor.download = 'watermark-removed.mp4';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const handleReset = () => {
    if (videoUrlRef.current) {
      URL.revokeObjectURL(videoUrlRef.current);
      videoUrlRef.current = null;
    }
    if (resultUrlRef.current) {
      URL.revokeObjectURL(resultUrlRef.current);
      resultUrlRef.current = null;
    }
    setFile(null);
    setVideoUrl(null);
    setResultUrl(null);
    setMeta(null);
    setRect(null);
    setStatus('idle');
    setProgress(0);
    setLogs([]);
    setErrorCode(null);
  };

  const largeFile = file ? isLargeFile(file) : false;
  const canProcess =
    status === 'ready' &&
    Boolean(meta && rect && rect.w >= 2 && rect.h >= 2) &&
    (!largeFile || ackLarge);

  return (
    <section id="editor" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          {dict.editor.cardTitle}
        </h2>
        <p className="mt-2 text-sm text-ink-600">{dict.editor.cardSubtitle}</p>
      </div>

      {!videoUrl ? (
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-8 text-center transition sm:p-12 ${
            dragging
              ? 'border-brand-500 bg-brand-50'
              : 'border-ink-300 bg-white hover:border-brand-400'
          }`}
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <UploadIcon className="h-8 w-8" />
          </span>
          <p className="mt-4 text-lg font-bold text-ink-900">{dict.editor.drop.title}</p>
          <p className="mt-1 text-sm text-ink-600">{dict.editor.drop.hint}</p>

          <input
            ref={inputRef}
            id="video-file"
            type="file"
            accept={ACCEPT_ATTRIBUTE}
            onChange={handleInput}
            className="sr-only"
          />
          <label
            htmlFor="video-file"
            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <UploadIcon className="h-4 w-4" />
            {dict.editor.drop.browse}
          </label>

          <p className="mt-5 text-xs text-ink-500">
            {dict.editor.drop.accepted} · {dict.editor.drop.maxSize}
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-ink-900">
                {dict.editor.drop.selected}: {file?.name}
              </p>
              <p className="mt-0.5 text-xs text-ink-500">
                {meta ? `${meta.width}×${meta.height} · ${meta.duration.toFixed(2)}s · ` : ''}
                {file ? formatBytes(file.size) : ''}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="rounded-lg border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-700 hover:bg-ink-50"
                disabled={status === 'processing'}
              >
                {dict.editor.drop.change}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 rounded-lg border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-700 hover:bg-ink-50"
                disabled={status === 'processing'}
              >
                <CloseIcon className="h-3.5 w-3.5" />
                {dict.editor.drop.remove}
              </button>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPT_ATTRIBUTE}
              onChange={handleInput}
              className="sr-only"
            />
          </div>

          {meta && (
            <WatermarkSelector
              videoUrl={videoUrl}
              videoSize={{ width: meta.width, height: meta.height }}
              rect={rect}
              onRectChange={setRect}
              videoRef={videoRef}
              onTimeUpdate={setCurrentTime}
              onMetadata={handleMetadata}
              dict={dict}
            />
          )}

          {meta && (
            <div className="grid gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-4 sm:grid-cols-2">
              <div>
                <p className="mb-1.5 text-xs font-semibold text-ink-700">{dict.editor.preview.rectLabel}</p>
                {rect ? (
                  <div className="flex flex-wrap gap-2 text-xs text-ink-800">
                    <span>{dict.editor.preview.x}: {Math.round(rect.x)}</span>
                    <span>{dict.editor.preview.y}: {Math.round(rect.y)}</span>
                    <span>{dict.editor.preview.w}: {Math.round(rect.w)}</span>
                    <span>{dict.editor.preview.h}: {Math.round(rect.h)}</span>
                  </div>
                ) : (
                  <p className="text-xs text-ink-400">{dict.editor.preview.noRect}</p>
                )}
                {rect && (
                  <button
                    type="button"
                    onClick={() => setRect(null)}
                    className="mt-2 text-xs font-semibold text-brand-700 underline underline-offset-2"
                  >
                    {dict.editor.preview.clear}
                  </button>
                )}
              </div>
              <div className="flex items-start gap-2 text-xs text-ink-600">
                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  {supportsSAB
                    ? dict.editor.thread.fast
                    : dict.editor.thread.noticeTitle}
                </span>
              </div>
            </div>
          )}

          {meta && (
            <TimeRange
              dict={dict}
              duration={meta.duration}
              start={start}
              end={end}
              currentTime={currentTime}
              onStartChange={(value) => setStart(clampTime(value))}
              onEndChange={(value) => setEnd(clampTime(value))}
              onUseCurrent={(field) => {
                const time = clampTime(videoRef.current?.currentTime ?? 0);
                if (field === 'start') setStart(time);
                else setEnd(time);
              }}
            />
          )}

          {!supportsSAB && (
            <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <InfoIcon className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-bold">{dict.editor.thread.noticeTitle}</p>
                <p className="mt-1 leading-6">{dict.editor.thread.noticeText}</p>
              </div>
            </div>
          )}

          {largeFile && status !== 'processing' && (
            <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
              <div className="flex-1">
                <p className="font-bold">{dict.editor.actions.largeTitle}</p>
                <p className="mt-1 leading-6">{dict.editor.actions.largeText}</p>
                <label className="mt-3 inline-flex cursor-pointer items-center gap-2 font-semibold">
                  <input
                    type="checkbox"
                    checked={ackLarge}
                    onChange={(event) => setAckLarge(event.target.checked)}
                    className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500"
                  />
                  {dict.editor.actions.understand}
                </label>
              </div>
            </div>
          )}

          {validationError && (
            <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
              {dict.editor.validation[validationError]}
            </div>
          )}

          {errorMessage(errorCode) && (
            <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
              <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-bold">{errorMessage(errorCode)}</p>
                {errorCode === 'memory' && (
                  <p className="mt-1 text-xs opacity-80">{dict.editor.errors.size}</p>
                )}
              </div>
            </div>
          )}

          {status === 'processing' && (
            <div className="rounded-2xl border border-ink-200 bg-white p-5">
              <div className="flex items-center justify-between text-sm font-semibold text-ink-800">
                <span>{dict.editor.actions.processing}</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
              <div
                className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink-100"
                role="progressbar"
                aria-valuenow={Math.round(progress * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={dict.editor.actions.progress}
              >
                <div
                  className="h-full rounded-full bg-brand-600 transition-[width] duration-150"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
              <details className="mt-4 text-xs text-ink-500">
                <summary className="cursor-pointer font-semibold text-ink-700">
                  {dict.editor.actions.logTitle}
                </summary>
                <pre className="mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded-lg bg-ink-950 p-3 font-mono text-[11px] leading-5 text-ink-200">
                  {logs.length ? logs.join('\n') : dict.editor.actions.emptyLog}
                </pre>
              </details>
            </div>
          )}

          {status === 'done' && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-2 font-bold text-emerald-800">
                <CheckIcon className="h-5 w-5" />
                {dict.editor.result.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-emerald-900">{dict.editor.result.text}</p>
              <p className="mt-1 text-xs text-emerald-800">{dict.editor.result.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  <DownloadIcon className="h-4 w-4" />
                  {dict.editor.actions.download}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
                >
                  {dict.editor.actions.again}
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {status !== 'processing' && status !== 'done' && (
              <button
                type="button"
                onClick={handleProcess}
                disabled={!canProcess}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-ink-300"
              >
                <CheckIcon className="h-4 w-4" />
                {dict.editor.actions.process}
              </button>
            )}

            {status === 'processing' && (
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 rounded-xl border border-red-300 bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-red-50"
              >
                <CloseIcon className="h-4 w-4" />
                {dict.editor.actions.cancel}
              </button>
            )}

            <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
              <CheckIcon className="h-4 w-4 text-emerald-600" />
              {dict.editor.localNote}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
