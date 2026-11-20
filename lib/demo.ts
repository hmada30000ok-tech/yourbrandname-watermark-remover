import type { Rect } from '@/lib/coordinates';

/**
 * Built-in sample clip for the homepage demo: a 640x360, 6-second video
 * with a "SAMPLE" watermark box drawn into the top-right corner.
 * The watermark position is fixed and known, so the editor can pre-draw
 * the selection rectangle for it.
 */
export const SAMPLE_VIDEO_URL = '/videos/sample-watermark.mp4';
export const SAMPLE_VIDEO_FILE_NAME = 'sample-watermark.mp4';
export const SAMPLE_VIDEO_SIZE = { width: 640, height: 360 };
export const SAMPLE_VIDEO_DURATION_SECONDS = 6;

/** The watermark box drawn into the sample clip (top-right corner). */
export const SAMPLE_RECT: Rect = { x: 480, y: 16, w: 144, h: 36 };

/** Window event the homepage demo button dispatches to load the sample into the editor. */
export const SAMPLE_LOAD_EVENT = 'unmark:load-sample';
