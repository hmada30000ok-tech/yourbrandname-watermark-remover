'use client';

import dynamic from 'next/dynamic';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { UploadIcon } from '@/components/ui/Icons';

/**
 * ffmpeg.wasm and all editing UI are loaded only in the browser, after the
 * initial HTML has painted. This keeps the first-load JavaScript small.
 */
const Editor = dynamic(() => import('@/components/editor/Editor'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-ink-300 bg-white">
      <div className="flex flex-col items-center gap-3 text-ink-500">
        <UploadIcon className="h-8 w-8 animate-pulse" />
        <span className="text-sm">…</span>
      </div>
    </div>
  ),
});

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function EditorDynamic({ locale, dict }: Props) {
  return <Editor locale={locale} dict={dict} />;
}
