import type { ReactNode } from 'react';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import type { PageKey } from '@/lib/routes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AdSlot from '@/components/AdSlot';

interface Props {
  locale: Locale;
  page: PageKey;
  dict: Dictionary;
  children: ReactNode;
}

export default function SiteLayout({ locale, page, dict, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.common.skipToContent}
      </a>

      <Header locale={locale} page={page} dict={dict} />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot slot="header" dict={dict} />
      </div>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer locale={locale} dict={dict} />
      <CookieConsent locale={locale} dict={dict} />
    </div>
  );
}
