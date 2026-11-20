import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';
import { ARTICLES, articlePath } from '@/lib/articles';
import { ROUTES, type PageKey } from '@/lib/routes';

const baseUrl = SITE_URL.replace(/\/$/, '');
const pages: PageKey[] = ['home', 'howItWorks', 'articles', 'terms', 'privacy', 'contact', 'about'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-11-20T00:00:00.000Z');

  const pageEntries = pages.flatMap((page) =>
    (['ar', 'en'] as const).map((locale) => ({
      url: `${baseUrl}${ROUTES[page][locale]}`,
      lastModified,
      changeFrequency: (page === 'home' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: page === 'home' ? 1 : page === 'howItWorks' ? 0.8 : page === 'articles' ? 0.7 : 0.5,
      alternates: {
        languages: {
          ar: `${baseUrl}${ROUTES[page].ar}`,
          en: `${baseUrl}${ROUTES[page].en}`,
        },
      },
    })),
  );

  const articleEntries = ARTICLES.flatMap((article) =>
    (['ar', 'en'] as const).map((locale) => ({
      url: `${baseUrl}${articlePath(article, locale)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          ar: `${baseUrl}${articlePath(article, 'ar')}`,
          en: `${baseUrl}${articlePath(article, 'en')}`,
        },
      },
    })),
  );

  return [...pageEntries, ...articleEntries];
}
