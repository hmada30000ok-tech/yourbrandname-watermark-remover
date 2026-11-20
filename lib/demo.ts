import type { Rect } from '@/lib/coordinates';

/**
 * Built-in sample clip for the homepage demo: real Times Square street
 * footage (Pexels, Joseph Eulo, free license), 640x360, 6 seconds,
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

/**
 * Homepage "how it works" demo: the same Times Square footage, but the
 * video itself shows a mouse cursor moving to the SAMPLE watermark,
 * dragging a selection rectangle around it and clicking — then the
 * watermark disappears from the video (delogo). 9 seconds, 640x360.
 */
export const DEMO_HOWTO_URL = '/videos/demo-howto.mp4';

/** Window event the homepage demo button dispatches to load the sample into the editor. */
export const SAMPLE_LOAD_EVENT = 'unmark:load-sample';
