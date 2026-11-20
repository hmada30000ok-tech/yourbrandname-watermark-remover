import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, type Locale } from '@/config/site';
import { getDictionary } from '@/i18n/dictionaries';
import { localizedPath, type PageKey } from '@/lib/routes';

const baseUrl = SITE_URL.replace(/\/$/, '');

export function createPageMetadata(locale: Locale, page: PageKey): Metadata {
  const dict = getDictionary(locale)[`meta`][page];
  const path = localizedPath(page, locale);
  const url = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title: dict.title,
    description: dict.description,
    alternates: {
      canonical: path,
      languages: {
        ar: `${baseUrl}${localizedPath(page, 'ar')}`,
        en: `${baseUrl}${localizedPath(page, 'en')}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: dict.title,
      description: dict.description,
      url,
      locale: locale === 'ar' ? 'ar' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.title,
      description: dict.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
