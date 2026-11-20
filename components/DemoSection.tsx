'use client';

import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { SAMPLE_LOAD_EVENT, DEMO_HOWTO_URL } from '@/lib/demo';
import { ArrowIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Interactive demo: the how-to clip playing on loop (muted autoplay) —
 * a mouse cursor moves to the SAMPLE watermark, drags a selection
 * rectangle around it and clicks, then the watermark disappears from
 * the video. The after-removal still beside it was produced by the same
 * delogo filter the tool uses. The button loads the sample clip into
 * the editor (via a window event the Editor listens for) and scrolls
 * to it.
 */
export default function DemoSection({ locale, dict }: Props) {
  const handleTry = () => {
    window.dispatchEvent(new CustomEvent(SAMPLE_LOAD_EVENT));
    document.getElementById('editor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="demo-title"
    >
      <h2 id="demo-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
        {dict.home.demoTitle}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-ink-600">{dict.home.demoText}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
          <video
            src={DEMO_HOWTO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={
              locale === 'ar'
                ? 'فيديو توضيحي يشتغل تلقائياً: الماوس يحدد العلامة المائية SAMPLE ويدوس عليها فتختفي من الفيديو'
                : 'How-to video playing automatically: the mouse selects the SAMPLE watermark and clicks it, and the watermark disappears from the video'
            }
            className="aspect-video w-full object-cover"
          />
          <figcaption className="flex items-center justify-between px-4 py-3">
            <span className="text-sm font-bold text-ink-900">{dict.home.demoBefore}</span>
            <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-semibold text-ink-600">
              SAMPLE
            </span>
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
          <img
            src="/images/demo/after.jpg"
            alt={
              locale === 'ar'
                ? 'نفس الإطار بعد إزالة العلامة المائية'
                : 'The same frame after the watermark was removed'
            }
            width={640}
            height={360}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
          <figcaption className="flex items-center justify-between px-4 py-3">
            <span className="text-sm font-bold text-ink-900">{dict.home.demoAfter}</span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
              delogo
            </span>
          </figcaption>
        </figure>
      </div>

      <p className="mt-3 text-xs leading-6 text-ink-500">{dict.home.demoNote}</p>

      <button
        type="button"
        onClick={handleTry}
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
      >
        {dict.home.demoCta}
        <ArrowIcon className="h-4 w-4" />
      </button>
    </section>
  );
}
