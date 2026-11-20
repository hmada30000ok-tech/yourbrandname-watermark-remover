import type { Metadata } from 'next';
import ArticlesIndexPage from '@/components/pages/ArticlesIndexPage';
import { getDictionary } from '@/i18n/dictionaries';
import { SITE_NAME, SITE_URL } from '@/config/site';

const baseUrl = SITE_URL.replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `المقالات والأدلة | ${SITE_NAME}`,
  description:
    'أدلة عملية ومفصلة تساعدك على إزالة العلامة المائية من فيديوهاتك بأفضل جودة ممكنة، وتشرح كيف تعمل الأداة وحدودها، وكيف تتجنب الأخطاء الشائعة.',
  alternates: {
    canonical: '/articles',
    languages: { ar: `${baseUrl}/articles`, en: `${baseUrl}/en/articles` },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `المقالات والأدلة | ${SITE_NAME}`,
    description:
      'أدلة عملية ومفصلة تساعدك على إزالة العلامة المائية من فيديوهاتك بأفضل جودة ممكنة.',
    url: `${baseUrl}/articles`,
    locale: 'ar',
    alternateLocale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ArticlesIndexPage locale="ar" dict={getDictionary('ar')} />;
}
