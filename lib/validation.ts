import {
  ACCEPTED_EXTENSIONS,
  ACCEPTED_MIME_TYPES,
  LARGE_FILE_WARNING_BYTES,
  MAX_FILE_SIZE_BYTES,
} from '@/config/app';

export type FileValidationError = 'unsupported' | 'tooLarge' | 'empty';

/**
 * Validate both the MIME type and the extension. An empty MIME type is
 * tolerated when the extension is valid (some browsers omit it).
 */
export function validateFile(file: File | null | undefined): FileValidationError | null {
  if (!file || file.size === 0) return 'empty';

  if (file.size > MAX_FILE_SIZE_BYTES) return 'tooLarge';

  const dot = file.name.lastIndexOf('.');
  const extension = dot > 0 ? file.name.slice(dot + 1).toLowerCase() : '';
  const extensionOk = (ACCEPTED_EXTENSIONS as readonly string[]).includes(extension);

  const mime = file.type.toLowerCase();
  const mimeOk = mime === '' || (ACCEPTED_MIME_TYPES as readonly string[]).includes(mime);

  if (!extensionOk || !mimeOk) return 'unsupported';

  return null;
}

export function isLargeFile(file: File): boolean {
  return file.size > LARGE_FILE_WARNING_BYTES;
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, index);
  return `${value.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}
