import type { Locale } from '@/config/site';

export type PageKey = 'home' | 'howItWorks' | 'terms' | 'privacy' | 'contact' | 'about';

export const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { ar: '/', en: '/en' },
  howItWorks: { ar: '/how-it-works', en: '/en/how-it-works' },
  terms: { ar: '/terms', en: '/en/terms' },
  privacy: { ar: '/privacy', en: '/en/privacy' },
  contact: { ar: '/contact', en: '/en/contact' },
  about: { ar: '/about', en: '/en/about' },
};

export function localizedPath(page: PageKey, locale: Locale): string {
  return ROUTES[page][locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

/** Best-effort detection of the current page from a pathname. */
export function pageFromPathname(pathname: string): PageKey {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const withoutEn = clean.startsWith('/en') ? clean.slice(3) || '/' : clean;

  switch (withoutEn) {
    case '/how-it-works':
      return 'howItWorks';
    case '/terms':
      return 'terms';
    case '/privacy':
      return 'privacy';
    case '/contact':
      return 'contact';
    case '/about':
      return 'about';
    default:
      return 'home';
  }
}

export function localeFromPathname(pathname: string): Locale {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean === '/en' || clean.startsWith('/en/') ? 'en' : 'ar';
}
