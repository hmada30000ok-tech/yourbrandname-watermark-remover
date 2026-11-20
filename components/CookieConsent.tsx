'use client';

import { useEffect, useState } from 'react';
import { CONSENT_CHANGE_EVENT, OPEN_CONSENT_EVENT, readConsent, writeConsent } from '@/lib/consent';
import { localizedPath } from '@/lib/routes';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { CloseIcon, ShieldIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function CookieConsent({ locale, dict }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);

    const onOpen = () => setVisible(true);
    const onChange = () => setVisible(false);
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);

    return () => {
      window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
      window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-ink-200 bg-white p-5 shadow-soft dark:border-ink-700 dark:bg-ink-900 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <ShieldIcon className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <h2 id="cookie-title" className="text-base font-bold text-ink-900 dark:text-white">
                {dict.cookie.title}
              </h2>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="rounded-lg p-1 text-ink-500 hover:bg-ink-100 hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
                aria-label={dict.nav.closeMenu}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
              {dict.cookie.text}{' '}
              <a
                href={localizedPath('privacy', locale)}
                className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                {dict.cookie.privacyLink}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => writeConsent('accepted')}
                className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                {dict.cookie.accept}
              </button>
              <button
                type="button"
                onClick={() => writeConsent('rejected')}
                className="rounded-xl border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                {dict.cookie.reject}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
