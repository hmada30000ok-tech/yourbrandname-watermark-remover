import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleDetailPage from '@/components/pages/ArticleDetailPage';
import { getDictionary } from '@/i18n/dictionaries';
import { ARTICLES, articlePath, getArticle, getArticleContent } from '@/lib/articles';
import { SITE_NAME, SITE_URL } from '@/config/site';

const baseUrl = SITE_URL.replace(/\/$/, '');

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  const content = getArticleContent(article, 'ar');
  const path = articlePath(article, 'ar');
  return {
    metadataBase: new URL(baseUrl),
    title: `${content.title} | ${SITE_NAME}`,
    description: content.excerpt,
    alternates: {
      canonical: path,
      languages: {
        ar: `${baseUrl}${articlePath(article, 'ar')}`,
        en: `${baseUrl}${articlePath(article, 'en')}`,
      },
    },
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      title: content.title,
      description: content.excerpt,
      url: `${baseUrl}${path}`,
      locale: 'ar',
      alternateLocale: 'en_US',
    },
    robots: { index: true, follow: true },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  return <ArticleDetailPage locale="ar" dict={getDictionary('ar')} article={article} />;
}
