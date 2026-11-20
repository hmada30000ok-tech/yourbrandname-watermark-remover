/// <reference lib="webworker" />

import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import {
  FFMPEG_CORE_FILES,
  FFMPEG_MULTITHREAD_BASE,
  FFMPEG_SINGLETHREAD_BASE,
  PROGRESS_THROTTLE_MS,
} from '@/config/app';
import type {
  JobErrorCode,
  WorkerRequest,
  WorkerResponse,
} from '@/lib/ffmpeg/messages';

const ctx = self as unknown as DedicatedWorkerGlobalScope;

const MEMORY_PATTERNS = [
  'out of memory',
  'cannot enlarge memory',
  'memory access out of bounds',
  'allocation failed',
  'runtime error: abort',
  'aborted()',
  'oom',
  'rangeerror: invalid typed array length',
];

function looksLikeMemoryError(message: string): boolean {
  const lower = message.toLowerCase();
  return MEMORY_PATTERNS.some((pattern) => lower.includes(pattern));
}

function post(message: WorkerResponse): void {
  ctx.postMessage(message);
}

async function run(request: Extract<WorkerRequest, { type: 'start' }>): Promise<void> {
  const { file, inputName, outputName, args, useMultiThread } = request;
  const ffmpeg = new FFmpeg();

  let phase: 'load' | 'write' | 'exec' | 'read' = 'load';
  let memorySeen = false;
  let lastProgressPost = 0;

  ffmpeg.on('progress', ({ progress, time }) => {
    const now = Date.now();
    const value = Number.isFinite(progress) ? Math.min(Math.max(progress, 0), 1) : 0;
    if (now - lastProgressPost < PROGRESS_THROTTLE_MS && value < 1) return;
    lastProgressPost = now;
    post({ type: 'progress', progress: value, time: Number.isFinite(time) ? time : 0 });
  });

  ffmpeg.on('log', ({ message }) => {
    if (!message) return;
    if (looksLikeMemoryError(message)) memorySeen = true;
    post({ type: 'log', message });
  });

  try {
    const base = useMultiThread
      ? FFMPEG_MULTITHREAD_BASE
      : FFMPEG_SINGLETHREAD_BASE;

    const coreURL = await toBlobURL(`${base}/${FFMPEG_CORE_FILES.core}`, 'text/javascript');
    const wasmURL = await toBlobURL(`${base}/${FFMPEG_CORE_FILES.wasm}`, 'application/wasm');
    const workerURL = useMultiThread
      ? await toBlobURL(`${base}/${FFMPEG_CORE_FILES.worker}`, 'text/javascript')
      : undefined;

    await ffmpeg.load(
      useMultiThread
        ? { coreURL, wasmURL, workerURL }
        : { coreURL, wasmURL },
    );

    phase = 'write';
    await ffmpeg.writeFile(inputName, await fetchFile(file));

    phase = 'exec';
    const exitCode = await ffmpeg.exec(args);
    if (exitCode !== 0) {
      throw new Error(`ffmpeg exited with code ${exitCode}`);
    }

    phase = 'read';
    const data = await ffmpeg.readFile(outputName);
    const bytes = data as Uint8Array;
    const buffer = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength,
    ) as ArrayBuffer;

    const blob = new Blob([buffer], { type: 'video/mp4' });
    post({ type: 'done', blob });
  } catch (error) {
    let code: JobErrorCode = 'unknown';
    if (memorySeen) code = 'memory';
    else if (phase === 'load') code = 'network';
    else if (phase === 'exec' || phase === 'write' || phase === 'read') code = 'job';

    const message = error instanceof Error ? error.message : String(error);
    post({ type: 'error', code, message });
  } finally {
    try {
      await ffmpeg.deleteFile(inputName);
    } catch {
      /* file may not exist yet — ignore */
    }
    try {
      await ffmpeg.deleteFile(outputName);
    } catch {
      /* file may not exist — ignore */
    }
    try {
      ffmpeg.terminate();
    } catch {
      /* internal worker may already be gone */
    }
  }
}

ctx.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const request = event.data;
  if (request.type === 'cancel') {
    ctx.close();
    return;
  }
  void run(request);
};
