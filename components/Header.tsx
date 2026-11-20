'use client';

import { useState } from 'react';
import { SITE_NAME, type Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { localizedPath, type PageKey } from '@/lib/routes';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { LogoMark, MenuIcon, CloseIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  page: PageKey;
  dict: Dictionary;
}

export default function Header({ locale, page, dict }: Props) {
  const [open, setOpen] = useState(false);

  const links: { key: PageKey; label: string }[] = [
    { key: 'home', label: dict.nav.home },
    { key: 'howItWorks', label: dict.nav.howItWorks },
    { key: 'about', label: dict.nav.about },
    { key: 'contact', label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur dark:border-ink-800 dark:bg-ink-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href={localizedPath('home', locale)}
          className="flex items-center gap-2 rounded-lg text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
        >
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="text-base font-extrabold tracking-tight sm:text-lg">{SITE_NAME}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={dict.nav.menu}>
          {links.map((link) => (
            <a
              key={link.key}
              href={localizedPath(link.key, locale)}
              aria-current={page === link.key ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 ${
                page === link.key
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200'
                  : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} page={page} label={dict.common.languageLabel} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-ink-200 p-2 text-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.menu}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-ink-100 bg-white px-4 py-3 md:hidden" aria-label={dict.nav.menu}>
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.key}>
                <a
                  href={localizedPath(link.key, locale)}
                  aria-current={page === link.key ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    page === link.key
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
