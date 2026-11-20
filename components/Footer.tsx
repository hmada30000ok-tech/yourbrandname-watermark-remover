'use client';

import { SITE_NAME, type Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { localizedPath, type PageKey } from '@/lib/routes';
import { openCookieSettings } from '@/lib/consent';
import { LogoMark } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: Props) {
  const product: { key: PageKey; label: string }[] = [
    { key: 'home', label: dict.nav.home },
    { key: 'howItWorks', label: dict.nav.howItWorks },
    { key: 'about', label: dict.nav.about },
  ];
  const legal: { key: PageKey; label: string }[] = [
    { key: 'terms', label: dict.terms.title },
    { key: 'privacy', label: dict.privacy.title },
    { key: 'contact', label: dict.nav.contact },
  ];

  return (
    <footer className="mt-20 border-t border-ink-200 bg-ink-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-extrabold text-ink-900">
            <LogoMark className="h-6 w-6 text-brand-600" />
            {SITE_NAME}
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink-600">{dict.footer.tagline}</p>
          <p className="mt-4 text-xs text-ink-400">{dict.footer.localeNote}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink-900">{dict.footer.productTitle}</h2>
          <ul className="mt-3 space-y-2">
            {product.map((item) => (
              <li key={item.key}>
                <a href={localizedPath(item.key, locale)} className="text-sm text-ink-600 hover:text-brand-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink-900">{dict.footer.legalTitle}</h2>
          <ul className="mt-3 space-y-2">
            {legal.map((item) => (
              <li key={item.key}>
                <a href={localizedPath(item.key, locale)} className="text-sm text-ink-600 hover:text-brand-700">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={openCookieSettings}
                className="text-sm text-ink-600 hover:text-brand-700"
              >
                {dict.cookie.manage}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-200 py-5 text-center text-xs text-ink-500">
        © 2026 {SITE_NAME}. {dict.footer.copyright}
      </div>
    </footer>
  );
}
