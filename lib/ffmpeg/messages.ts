export type JobErrorCode = 'memory' | 'network' | 'job' | 'unknown';

export interface StartRequest {
  type: 'start';
  file: File;
  inputName: string;
  outputName: string;
  args: string[];
  useMultiThread: boolean;
}

export interface CancelRequest {
  type: 'cancel';
}

export type WorkerRequest = StartRequest | CancelRequest;

export interface ProgressResponse {
  type: 'progress';
  /** 0..1 */
  progress: number;
  /** microseconds, as reported by ffmpeg */
  time: number;
}

export interface LogResponse {
  type: 'log';
  message: string;
}

export interface DoneResponse {
  type: 'done';
  blob: Blob;
}

export interface ErrorResponse {
  type: 'error';
  code: JobErrorCode;
  message: string;
}

export type WorkerResponse = ProgressResponse | LogResponse | DoneResponse | ErrorResponse;
