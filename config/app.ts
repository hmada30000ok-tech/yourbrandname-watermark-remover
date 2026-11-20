/**
 * Single source of truth for upload limits, accepted formats and ffmpeg core
 * loading. Change values here only.
 */

/** Hard maximum upload size in megabytes. */
export const MAX_FILE_SIZE_MB = 400;

/** Above this size we show an explicit "may be slow on mobile" warning. */
export const LARGE_FILE_WARNING_MB = 100;

export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
export const LARGE_FILE_WARNING_BYTES = LARGE_FILE_WARNING_MB * 1024 * 1024;

/** Accepted formats. Extension is checked in addition to MIME type. */
export const ACCEPTED_EXTENSIONS = ['mp4', 'mov', 'webm'] as const;
export const ACCEPTED_MIME_TYPES = [
  'video/mp4',
  'video/quicktime',
  'video/webm',
] as const;

export const ACCEPT_ATTRIBUTE = '.mp4,.mov,.webm,video/mp4,video/quicktime,video/webm';

/**
 * ffmpeg.wasm cores are loaded lazily from a CDN at processing time with
 * PINNED versions that match the npm dependencies. `toBlobURL` fetches them
 * with CORS and serves them from a same-origin blob URL.
 *
 * The deployment intentionally omits COOP/COEP headers so Google AdSense can
 * load; therefore SharedArrayBuffer is unavailable and the single-thread core
 * is used. See public/_headers for the full explanation.
 *
 * Note: in ffmpeg.wasm v0.12 the single-thread core is @ffmpeg/core and the
 * multithreaded core is @ffmpeg/core-mt. (@ffmpeg/core-st ended at v0.11 and
 * targets the older API, so @ffmpeg/core is the correct fallback here.)
 */
export const FFMPEG_CORE_VERSION = '0.12.10';

export const FFMPEG_MULTITHREAD_BASE = `https://unpkg.com/@ffmpeg/core-mt@${FFMPEG_CORE_VERSION}/dist/umd`;
export const FFMPEG_SINGLETHREAD_BASE = `https://unpkg.com/@ffmpeg/core@${FFMPEG_CORE_VERSION}/dist/umd`;

export const FFMPEG_CORE_FILES = {
  core: 'ffmpeg-core.js',
  wasm: 'ffmpeg-core.wasm',
  /** Only the multithreaded core ships a separate worker file. */
  worker: 'ffmpeg-core.worker.js',
} as const;

/** Debounce for progress postMessage, in milliseconds. */
export const PROGRESS_THROTTLE_MS = 80;

/** Prefix used for the localStorage consent key. */
export const CONSENT_STORAGE_KEY = 'yourbrandname-cookie-consent';
