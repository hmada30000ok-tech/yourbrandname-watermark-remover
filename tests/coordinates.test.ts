import { describe, expect, it } from 'vitest';
import {
  clamp,
  clampRect,
  displayToVideoRect,
  getContainRect,
  pointerToVideoPoint,
  rectFromPoints,
  videoPointToElement,
  videoToDisplayRect,
  type Rect,
} from '@/lib/coordinates';

describe('clamp', () => {
  it('keeps values inside the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-2, 0, 10)).toBe(0);
    expect(clamp(12, 0, 10)).toBe(10);
  });

  it('handles NaN and inverted ranges', () => {
    expect(clamp(Number.NaN, 3, 9)).toBe(3);
    expect(clamp(5, 9, 3)).toBe(9);
  });
});

describe('rectFromPoints', () => {
  it('produces a positive rectangle regardless of drag direction', () => {
    expect(rectFromPoints({ x: 80, y: 90 }, { x: 20, y: 30 })).toEqual({
      x: 20,
      y: 30,
      w: 60,
      h: 60,
    });
  });
});

describe('clampRect', () => {
  const bounds = { width: 1920, height: 1080 };

  it('keeps an in-bounds rectangle unchanged', () => {
    const rect: Rect = { x: 100, y: 200, w: 300, h: 150 };
    expect(clampRect(rect, bounds)).toEqual(rect);
  });

  it('clamps width and height to the remaining space', () => {
    expect(clampRect({ x: 1800, y: 1000, w: 500, h: 500 }, bounds)).toEqual({
      x: 1800,
      y: 1000,
      w: 120,
      h: 80,
    });
  });

  it('clamps negative coordinates and rounds fractional values', () => {
    expect(clampRect({ x: -12.6, y: -0.4, w: 100.5, h: 99.4 }, bounds)).toEqual({
      x: 0,
      y: 0,
      w: 101,
      h: 99,
    });
  });

  it('returns a zero rectangle for invalid bounds', () => {
    expect(clampRect({ x: 3, y: 3, w: 4, h: 4 }, { width: 0, height: 10 })).toEqual({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
    });
  });
});

describe('display/video scaling', () => {
  const display = { width: 640, height: 360 };
  const video = { width: 1920, height: 1080 };

  it('scales from displayed CSS pixels to video pixels (3x)', () => {
    expect(displayToVideoRect({ x: 10, y: 20, w: 100, h: 50 }, display, video)).toEqual({
      x: 30,
      y: 60,
      w: 300,
      h: 150,
    });
  });

  it('round-trips between the two coordinate spaces', () => {
    const original: Rect = { x: 123, y: 77, w: 456, h: 321 };
    const scaled = videoToDisplayRect(original, display, video);
    const restored = displayToVideoRect(scaled, display, video);
    expect(restored.x).toBeCloseTo(original.x, 6);
    expect(restored.y).toBeCloseTo(original.y, 6);
    expect(restored.w).toBeCloseTo(original.w, 6);
    expect(restored.h).toBeCloseTo(original.h, 6);
  });

  it('returns zero for a zero-sized display', () => {
    expect(displayToVideoRect({ x: 1, y: 1, w: 1, h: 1 }, { width: 0, height: 0 }, video)).toEqual({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
    });
  });
});

describe('getContainRect', () => {
  it('centres a letterboxed 16:9 video in a tall element', () => {
    const result = getContainRect({ width: 400, height: 400 }, { width: 1920, height: 1080 });
    expect(result.w).toBeCloseTo(400);
    expect(result.h).toBeCloseTo(225);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(87.5);
  });

  it('centres a pillarbox video in a wide element', () => {
    const result = getContainRect({ width: 400, height: 300 }, { width: 600, height: 1200 });
    expect(result.w).toBeCloseTo(150);
    expect(result.h).toBeCloseTo(300);
    expect(result.x).toBeCloseTo(125);
    expect(result.y).toBeCloseTo(0);
  });

  it('fills the element when aspect ratios match', () => {
    expect(getContainRect({ width: 800, height: 450 }, { width: 1280, height: 720 })).toEqual({
      x: 0,
      y: 0,
      w: 800,
      h: 450,
    });
  });
});

describe('pointer mapping with letterboxing', () => {
  const elementBox = { width: 400, height: 400 };
  const media = { width: 1920, height: 1080 };

  it('maps the top-left of the visible image to (0,0)', () => {
    const point = pointerToVideoPoint({ x: 0, y: 87.5 }, elementBox, media);
    expect(point.x).toBeCloseTo(0, 5);
    expect(point.y).toBeCloseTo(0, 5);
  });

  it('maps the bottom-right of the visible image to intrinsic size', () => {
    const point = pointerToVideoPoint({ x: 400, y: 312.5 }, elementBox, media);
    expect(point.x).toBeCloseTo(1920, 5);
    expect(point.y).toBeCloseTo(1080, 5);
  });

  it('clamps clicks in the letterbox bars', () => {
    expect(pointerToVideoPoint({ x: 200, y: 10 }, elementBox, media)).toEqual({ x: 960, y: 0 });
  });

  it('round-trips a video point back to the element', () => {
    const videoPoint = { x: 960, y: 540 };
    const elementPoint = videoPointToElement(videoPoint, elementBox, media);
    const restored = pointerToVideoPoint(elementPoint, elementBox, media);
    expect(restored.x).toBeCloseTo(videoPoint.x, 5);
    expect(restored.y).toBeCloseTo(videoPoint.y, 5);
  });
});
