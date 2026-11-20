import { describe, expect, it } from 'vitest';
import {
  buildDelogoArgs,
  formatSeconds,
  inputNameFor,
  normalizeDelogoRect,
  type DelogoOptions,
} from '@/lib/ffmpeg/buildArgs';

const base: DelogoOptions = {
  inputName: 'input.mp4',
  outputName: 'output.mp4',
  videoWidth: 1920,
  videoHeight: 1080,
  rects: [{ x: 10, y: 20, w: 100, h: 40 }],
  startTime: 0,
  endTime: 5,
};

describe('formatSeconds', () => {
  it('formats whole and fractional seconds without trailing zeros', () => {
    expect(formatSeconds(0)).toBe('0');
    expect(formatSeconds(5)).toBe('5');
    expect(formatSeconds(1.5)).toBe('1.5');
    expect(formatSeconds(1.2346)).toBe('1.235');
  });

  it('rejects invalid and negative values', () => {
    expect(formatSeconds(-4)).toBe('0');
    expect(formatSeconds(Number.NaN)).toBe('0');
    expect(formatSeconds(Number.POSITIVE_INFINITY)).toBe('0');
  });
});

describe('normalizeDelogoRect', () => {
  it('rounds coordinates to integers', () => {
    expect(normalizeDelogoRect({ x: 10.6, y: 20.2, w: 99.5, h: 40.4 }, 1920, 1080)).toEqual({
      x: 11,
      y: 20,
      w: 100,
      h: 40,
    });
  });

  it('clamps a rectangle that extends beyond the video', () => {
    expect(normalizeDelogoRect({ x: 1900, y: 1060, w: 400, h: 300 }, 1920, 1080)).toEqual({
      x: 1900,
      y: 1060,
      w: 20,
      h: 20,
    });
  });

  it('enforces a minimum size of two pixels for delogo interpolation', () => {
    expect(normalizeDelogoRect({ x: 50, y: 50, w: 0, h: 1 }, 1920, 1080)).toEqual({
      x: 50,
      y: 50,
      w: 2,
      h: 2,
    });
  });

  it('handles tiny videos without inverting the rectangle', () => {
    expect(normalizeDelogoRect({ x: 0, y: 0, w: 9, h: 9 }, 1, 1)).toEqual({
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    });
  });
});

describe('buildDelogoArgs', () => {
  it('builds an exact argument array (never a shell string)', () => {
    expect(buildDelogoArgs(base)).toEqual([
      '-i',
      'input.mp4',
      '-vf',
      "delogo=x=10:y=20:w=100:h=40:enable='between(t,0,5)':show=0",
      '-c:v',
      'libx264',
      '-preset',
      'ultrafast',
      '-crf',
      '23',
      '-pix_fmt',
      'yuv420p',
      '-c:a',
      'copy',
      '-movflags',
      '+faststart',
      'output.mp4',
    ]);
  });

  it('clamps out-of-bounds rectangles and integerises the filter values', () => {
    const args = buildDelogoArgs({
      ...base,
      rects: [{ x: 1910.4, y: 1070.8, w: 80, h: 80 }],
    });
    expect(args[3]).toBe(
      "delogo=x=1910:y=1071:w=10:h=9:enable='between(t,0,5)':show=0",
    );
  });

  it('uses fractional time values in the enable expression', () => {
    const args = buildDelogoArgs({ ...base, startTime: 1.25, endTime: 8.5 });
    expect(args[3]).toContain("enable='between(t,1.25,8.5)'");
  });

  it('swaps inverted time bounds and clamps negatives to zero', () => {
    const args = buildDelogoArgs({ ...base, startTime: -3, endTime: 12.3456 });
    expect(args[3]).toContain("enable='between(t,0,12.346)'");
  });

  it('copies audio and re-encodes video with libx264', () => {
    const args = buildDelogoArgs(base);
    expect(args).toContain('libx264');
    expect(args).toContain('copy');
    expect(args[args.indexOf('-c:a') + 1]).toBe('copy');
    expect(args[args.indexOf('-crf') + 1]).toBe('23');
  });

  it('chains one delogo filter per rectangle so several watermarks are removed in one pass', () => {
    const args = buildDelogoArgs({
      ...base,
      rects: [
        { x: 10, y: 20, w: 100, h: 40 },
        { x: 300, y: 400, w: 80, h: 30 },
      ],
    });
    expect(args[3]).toBe(
      "delogo=x=10:y=20:w=100:h=40:enable='between(t,0,5)':show=0," +
        "delogo=x=300:y=400:w=80:h=30:enable='between(t,0,5)':show=0",
    );
  });

  it('requires at least one rectangle', () => {
    expect(() => buildDelogoArgs({ ...base, rects: [] })).toThrow(
      'at least one rectangle',
    );
  });

  it('contains exactly one filter argument and one output argument', () => {
    const args = buildDelogoArgs(base);
    expect(args.filter((value) => value === '-vf')).toHaveLength(1);
    expect(args[args.length - 1]).toBe('output.mp4');
    expect(args.every((value) => typeof value === 'string')).toBe(true);
  });
});

describe('inputNameFor', () => {
  it('keeps supported extensions and defaults unknown ones to mp4', () => {
    expect(inputNameFor('Holiday.MOV')).toBe('input.mov');
    expect(inputNameFor('clip.webm')).toBe('input.webm');
    expect(inputNameFor('no-extension')).toBe('input.mp4');
    expect(inputNameFor('clip.avi')).toBe('input.mp4');
  });
});
