import type { Metadata } from 'next';
import ArticlesIndexPage from '@/components/pages/ArticlesIndexPage';
import { getDictionary } from '@/i18n/dictionaries';
import { SITE_NAME, SITE_URL } from '@/config/site';

const baseUrl = SITE_URL.replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Articles & Guides | ${SITE_NAME}`,
  description:
    'Practical, in-depth guides that help you remove watermarks from your videos with the best possible quality, explain how the tool works and where its limits are, and show you how to avoid common mistakes.',
  alternates: {
    canonical: '/en/articles',
    languages: { ar: `${baseUrl}/articles`, en: `${baseUrl}/en/articles` },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `Articles & Guides | ${SITE_NAME}`,
    description:
      'Practical, in-depth guides that help you remove watermarks from your videos with the best possible quality.',
    url: `${baseUrl}/en/articles`,
    locale: 'en_US',
    alternateLocale: 'ar',
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ArticlesIndexPage locale="en" dict={getDictionary('en')} />;
}
