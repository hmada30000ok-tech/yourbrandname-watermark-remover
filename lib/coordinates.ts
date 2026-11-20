/**
 * Pure geometry helpers shared by the watermark selector and the ffmpeg
 * argument builder. Kept free of React/DOM so they can be unit tested.
 */

export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Size {
  width: number;
  height: number;
}

export const ZERO_RECT: Rect = { x: 0, y: 0, w: 0, h: 0 };

export function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

/** Build a positive-size rectangle from any two corner points. */
export function rectFromPoints(a: Point, b: Point): Rect {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    w: Math.abs(b.x - a.x),
    h: Math.abs(b.y - a.y),
  };
}

/** Keep a rectangle fully inside the given bounds. */
export function clampRect(rect: Rect, bounds: Size): Rect {
  if (bounds.width <= 0 || bounds.height <= 0) return { ...ZERO_RECT };

  const x = clamp(Math.round(rect.x), 0, bounds.width);
  const y = clamp(Math.round(rect.y), 0, bounds.height);

  return {
    x,
    y,
    w: clamp(Math.round(rect.w), 0, bounds.width - x),
    h: clamp(Math.round(rect.h), 0, bounds.height - y),
  };
}

/** Scale a rectangle measured in CSS pixels into intrinsic video pixels. */
export function displayToVideoRect(rect: Rect, display: Size, video: Size): Rect {
  if (display.width <= 0 || display.height <= 0) return { ...ZERO_RECT };

  const scaleX = video.width / display.width;
  const scaleY = video.height / display.height;

  return {
    x: rect.x * scaleX,
    y: rect.y * scaleY,
    w: rect.w * scaleX,
    h: rect.h * scaleY,
  };
}

/** Scale a rectangle measured in intrinsic video pixels into CSS pixels. */
export function videoToDisplayRect(rect: Rect, display: Size, video: Size): Rect {
  if (video.width <= 0 || video.height <= 0) return { ...ZERO_RECT };

  const scaleX = display.width / video.width;
  const scaleY = display.height / video.height;

  return {
    x: rect.x * scaleX,
    y: rect.y * scaleY,
    w: rect.w * scaleX,
    h: rect.h * scaleY,
  };
}

/**
 * The <video> element uses object-fit: contain. This returns the rectangle of
 * the actual image *inside* the element box, so pointer coordinates can be
 * mapped correctly even when there are letterbox/pillarbox bars.
 */
export function getContainRect(container: Size, media: Size): Rect {
  if (container.width <= 0 || container.height <= 0 || media.width <= 0 || media.height <= 0) {
    return { ...ZERO_RECT };
  }

  const scale = Math.min(container.width / media.width, container.height / media.height);
  const width = media.width * scale;
  const height = media.height * scale;

  return {
    x: (container.width - width) / 2,
    y: (container.height - height) / 2,
    w: width,
    h: height,
  };
}

/**
 * Convert a pointer position (relative to the element box) into intrinsic
 * video pixel coordinates, accounting for object-fit: contain letterboxing.
 */
export function pointerToVideoPoint(point: Point, elementBox: Size, media: Size): Point {
  const inner = getContainRect(elementBox, media);
  if (inner.w <= 0 || inner.h <= 0) return { x: 0, y: 0 };

  const relativeX = (point.x - inner.x) / inner.w;
  const relativeY = (point.y - inner.y) / inner.h;

  return {
    x: clamp(relativeX, 0, 1) * media.width,
    y: clamp(relativeY, 0, 1) * media.height,
  };
}

/** Inverse of pointerToVideoPoint, used to place the overlay on screen. */
export function videoPointToElement(point: Point, elementBox: Size, media: Size): Point {
  const inner = getContainRect(elementBox, media);
  return {
    x: inner.x + (point.x / Math.max(media.width, 1)) * inner.w,
    y: inner.y + (point.y / Math.max(media.height, 1)) * inner.h,
  };
}
