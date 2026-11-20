import { clamp } from '@/lib/coordinates';
import type { Rect } from '@/lib/coordinates';

export interface DelogoOptions {
  /** File name written into the ffmpeg virtual FS. */
  inputName: string;
  /** Output file name in the ffmpeg virtual FS. */
  outputName: string;
  /** Intrinsic video dimensions, used for clamping. */
  videoWidth: number;
  videoHeight: number;
  /** Rectangle in intrinsic video pixels. */
  rect: Rect;
  /** Start of the enabled time window, in seconds. */
  startTime: number;
  /** End of the enabled time window, in seconds. */
  endTime: number;
}

/** Format a timestamp safely for ffmpeg's `between()` expression. */
export function formatSeconds(seconds: number): string {
  const safe = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  return safe.toFixed(3).replace(/\.?0+$/, '') || '0';
}

/**
 * Clamp and integerise a rectangle for the delogo filter.
 *
 * delogo needs at least 2 pixels on each side to interpolate, so width and
 * height are clamped to a minimum of 2 (or the video dimension when smaller).
 */
export function normalizeDelogoRect(rect: Rect, videoWidth: number, videoHeight: number): Rect {
  const width = Math.max(0, Math.floor(videoWidth));
  const height = Math.max(0, Math.floor(videoHeight));

  if (width === 0 || height === 0) return { x: 0, y: 0, w: 0, h: 0 };

  const x = clamp(Math.round(rect.x), 0, width - 1);
  const y = clamp(Math.round(rect.y), 0, height - 1);

  const maxW = width - x;
  const maxH = height - y;

  return {
    x,
    y,
    w: clamp(Math.round(rect.w), Math.min(2, maxW), maxW),
    h: clamp(Math.round(rect.h), Math.min(2, maxH), maxH),
  };
}

/**
 * Build the ffmpeg command as an argument ARRAY — never a shell string.
 * Example output:
 *   ["-i","input.mp4","-vf","delogo=x=10:y=20:w=100:h=40:enable='between(t,0,5)':show=0",
 *    "-c:v","libx264","-preset","veryfast","-crf","23","-c:a","copy",
 *    "-movflags","+faststart","output.mp4"]
 */
export function buildDelogoArgs(options: DelogoOptions): string[] {
  const {
    inputName,
    outputName,
    videoWidth,
    videoHeight,
    rect,
    startTime,
    endTime,
  } = options;

  const safe = normalizeDelogoRect(rect, videoWidth, videoHeight);

  const start = formatSeconds(startTime);
  const end = formatSeconds(Math.max(startTime, endTime));

  const filter = [
    `delogo=x=${safe.x}`,
    `y=${safe.y}`,
    `w=${safe.w}`,
    `h=${safe.h}`,
    `enable='between(t,${start},${end})'`,
    'show=0',
  ].join(':');

  return [
    '-i',
    inputName,
    '-vf',
    filter,
    '-c:v',
    'libx264',
    '-preset',
    'veryfast',
    '-crf',
    '23',
    '-pix_fmt',
    'yuv420p',
    '-c:a',
    'copy',
    '-movflags',
    '+faststart',
    outputName,
  ];
}

/** Small helper used by the UI to derive a safe input file name. */
export function inputNameFor(fileName: string): string {
  const dot = fileName.lastIndexOf('.');
  const ext = dot > 0 ? fileName.slice(dot + 1).toLowerCase() : 'mp4';
  const safeExt = ['mp4', 'mov', 'webm'].includes(ext) ? ext : 'mp4';
  return `input.${safeExt}`;
}
