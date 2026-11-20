'use client';

import { useEffect, useRef, useState, type PointerEvent, type RefObject } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import {
  clampRect,
  pointerToVideoPoint,
  rectFromPoints,
  videoPointToElement,
  ZERO_RECT,
  type Point,
  type Rect,
  type Size,
} from '@/lib/coordinates';
import { useElementSize } from './useElementSize';
import { CheckIcon } from '@/components/ui/Icons';

type Handle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';
type Mode = 'draw' | 'resize' | 'move';

interface Interaction {
  mode: Mode;
  handle?: Handle;
  anchor: Point;
  initial: Rect;
}

interface Props {
  videoUrl: string;
  videoSize: Size;
  rect: Rect | null;
  onRectChange: (rect: Rect | null) => void;
  videoRef: RefObject<HTMLVideoElement>;
  onTimeUpdate: (time: number) => void;
  onMetadata: (size: Size, duration: number) => void;
  dict: Dictionary;
}

const HANDLES: { id: Handle; left: string; top: string }[] = [
  { id: 'nw', left: '0%', top: '0%' },
  { id: 'n', left: '50%', top: '0%' },
  { id: 'ne', left: '100%', top: '0%' },
  { id: 'e', left: '100%', top: '50%' },
  { id: 'se', left: '100%', top: '100%' },
  { id: 's', left: '50%', top: '100%' },
  { id: 'sw', left: '0%', top: '100%' },
  { id: 'w', left: '0%', top: '50%' },
];

function applyHandle(initial: Rect, handle: Handle, point: Point): Rect {
  let left = initial.x;
  let top = initial.y;
  let right = initial.x + initial.w;
  let bottom = initial.y + initial.h;

  if (handle.includes('w')) left = point.x;
  if (handle.includes('e')) right = point.x;
  if (handle.includes('n')) top = point.y;
  if (handle.includes('s')) bottom = point.y;

  return rectFromPoints({ x: left, y: top }, { x: right, y: bottom });
}

export default function WatermarkSelector({
  videoUrl,
  videoSize,
  rect,
  onRectChange,
  videoRef,
  onTimeUpdate,
  onMetadata,
  dict,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const interaction = useRef<Interaction | null>(null);
  const rectRef = useRef<Rect | null>(rect);
  const box = useElementSize(containerRef);
  // Default is play mode: the video controls (play, seek, fullscreen)
  // work normally. Drawing only starts after the user explicitly
  // presses "Select watermark", so the draw cursor does not appear
  // immediately on upload and does not block the video controls.
  const [selecting, setSelecting] = useState(false);

  const enterSelectMode = () => {
    videoRef.current?.pause();
    setSelecting(true);
  };

  const toggleFullscreen = async () => {
    const element = containerRef.current;
    if (!element) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await element.requestFullscreen();
      }
    } catch {
      // Fullscreen is unavailable in this browser; the native video
      // controls still offer it. Ignore the failure silently.
    }
  };

  useEffect(() => {
    rectRef.current = rect;
  }, [rect]);

  const pointFromEvent = (event: PointerEvent): Point => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return { x: 0, y: 0 };
    return pointerToVideoPoint(
      { x: event.clientX - bounds.left, y: event.clientY - bounds.top },
      box,
      videoSize,
    );
  };

  const begin = (event: PointerEvent, mode: Mode, handle?: Handle) => {
    if (!selecting) return;
    event.preventDefault();
    event.stopPropagation();
    overlayRef.current?.setPointerCapture(event.pointerId);

    const point = pointFromEvent(event);
    interaction.current = {
      mode,
      handle,
      anchor: point,
      initial: rectRef.current ?? ZERO_RECT,
    };

    if (mode === 'draw') {
      onRectChange({ x: point.x, y: point.y, w: 0, h: 0 });
    }
  };

  const move = (event: PointerEvent) => {
    const current = interaction.current;
    if (!current) return;
    event.preventDefault();

    const point = pointFromEvent(event);

    if (current.mode === 'draw') {
      onRectChange(rectFromPoints(current.anchor, point));
    } else if (current.mode === 'resize' && current.handle) {
      onRectChange(applyHandle(current.initial, current.handle, point));
    } else if (current.mode === 'move') {
      onRectChange({
        x: current.initial.x + (point.x - current.anchor.x),
        y: current.initial.y + (point.y - current.anchor.y),
        w: current.initial.w,
        h: current.initial.h,
      });
    }
  };

  const end = (event: PointerEvent) => {
    const current = interaction.current;
    interaction.current = null;

    if (overlayRef.current?.hasPointerCapture(event.pointerId)) {
      overlayRef.current.releasePointerCapture(event.pointerId);
    }

    if (current?.mode === 'draw') {
      const drawn = rectRef.current;
      if (!drawn || drawn.w < 3 || drawn.h < 3) {
        onRectChange(null);
      } else {
        onRectChange(clampRect(drawn, videoSize));
      }
    } else if (current) {
      onRectChange(clampRect(rectRef.current ?? ZERO_RECT, videoSize));
    }
  };

  const display = rect
    ? (() => {
        const topLeft = videoPointToElement({ x: rect.x, y: rect.y }, box, videoSize);
        const bottomRight = videoPointToElement(
          { x: rect.x + rect.w, y: rect.y + rect.h },
          box,
          videoSize,
        );
        return {
          left: topLeft.x,
          top: topLeft.y,
          width: bottomRight.x - topLeft.x,
          height: bottomRight.y - topLeft.y,
        };
      })()
    : null;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSelecting(false)}
          aria-pressed={!selecting}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
            !selecting
              ? 'bg-brand-600 text-white'
              : 'border border-ink-200 bg-white text-ink-700 hover:bg-ink-50'
          }`}
        >
          {dict.editor.preview.playMode}
        </button>
        <button
          type="button"
          onClick={enterSelectMode}
          aria-pressed={selecting}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
            selecting
              ? 'bg-brand-600 text-white'
              : 'border border-ink-200 bg-white text-ink-700 hover:bg-ink-50'
          }`}
        >
          {dict.editor.preview.selectMode}
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 hover:bg-ink-50"
        >
          {dict.editor.preview.fullscreen}
        </button>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl border border-ink-900 bg-black"
        style={{ aspectRatio: `${videoSize.width} / ${videoSize.height}`, maxHeight: '65vh' }}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-contain"
          onTimeUpdate={(event) => onTimeUpdate(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => {
            const element = event.currentTarget;
            onTimeUpdate(element.currentTime);
            onMetadata(
              {
                width: element.videoWidth,
                height: element.videoHeight,
              },
              Number.isFinite(element.duration) ? element.duration : 0,
            );
          }}
        />

        <div
          ref={overlayRef}
          className={`absolute inset-0 touch-none ${
            selecting ? '' : 'pointer-events-none'
          }`}
          style={{ cursor: selecting ? 'crosshair' : 'default' }}
          onPointerDown={(event) => begin(event, 'draw')}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
        >
          {display && (
            <div
              className="absolute border-2 border-brand-400 bg-brand-500/20"
              style={display}
              onPointerDown={(event) => begin(event, 'move')}
            >
              <span className="pointer-events-none absolute -top-7 start-0 whitespace-nowrap rounded-md bg-brand-600 px-2 py-0.5 text-[11px] font-medium text-white">
                {Math.round(rect!.w)} × {Math.round(rect!.h)}
              </span>
              {HANDLES.map((handle) => (
                <span
                  key={handle.id}
                  role="presentation"
                  onPointerDown={(event) => begin(event, 'resize', handle.id)}
                  className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand-600 shadow"
                  style={{ left: handle.left, top: handle.top, cursor: 'pointer' }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-ink-600">
          {selecting ? dict.editor.preview.hint : dict.editor.preview.playHint}
        </p>
        {rect && rect.w > 0 && rect.h > 0 ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <CheckIcon className="h-4 w-4" />
            {dict.editor.preview.ready}
          </span>
        ) : (
          <span className="text-xs text-ink-400">{dict.editor.preview.noRect}</span>
        )}
      </div>
    </div>
  );
}
