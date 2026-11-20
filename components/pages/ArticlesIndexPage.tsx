import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { ARTICLES, articlePath, getArticleContent } from '@/lib/articles';
import { localizedPath } from '@/lib/routes';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import { ArrowIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function ArticlesIndexPage({ locale, dict }: Props) {
  const title = locale === 'ar' ? 'المقالات والأدلة' : 'Articles & Guides';
  const intro =
    locale === 'ar'
      ? 'أدلة عملية ومفصلة تساعدك على إزالة العلامة المائية من فيديوهاتك بأفضل جودة ممكنة، وتشرح كيف تعمل الأداة وحدودها، وكيف تتجنب الأخطاء الشائعة. كل مقال مكتوب بالعربية والإنجليزية.'
      : 'Practical, in-depth guides that help you remove watermarks from your videos with the best possible quality, explain how the tool works and where its limits are, and show you how to avoid common mistakes. Every article is written in Arabic and English.';
  const readLabel = locale === 'ar' ? 'اقرأ المقال' : 'Read the article';
  const minutesLabel = (minutes: number) =>
    locale === 'ar' ? `${minutes} دقائق قراءة` : `${minutes} min read`;

  return (
    <SiteLayout locale={locale} page="articles" dict={dict}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <div className="min-w-0">
          <header className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-7 text-ink-600">{intro}</p>
          </header>

          <AdSlot slot="inContent" dict={dict} />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ARTICLES.map((article) => {
              const content = getArticleContent(article, locale);
              return (
                <article
                  key={article.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white"
                >
                  <img
                    src={article.image.src}
                    alt={locale === 'ar' ? article.image.altAr : article.image.altEn}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-bold text-brand-700">{minutesLabel(content.readingMinutes)}</p>
                    <h2 className="mt-2 text-lg font-extrabold leading-7 text-ink-900">
                      <a href={articlePath(article, locale)} className="hover:text-brand-700">
                        {content.title}
                      </a>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-ink-600">{content.excerpt}</p>
                    <a
                      href={articlePath(article, locale)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800"
                    >
                      {readLabel}
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-brand-600 p-6 text-white sm:p-8">
            <p className="text-lg font-bold">
              {locale === 'ar' ? 'جرّب الأداة بعد القراءة' : 'Try the tool after reading'}
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-50">
              {locale === 'ar'
                ? 'ارفع الفيديو، حدّد العلامة المائية، وابدأ المعالجة مباشرة في متصفحك.'
                : 'Upload your video, mark the watermark, and start processing directly in your browser.'}
            </p>
            <a
              href={`${localizedPath('home', locale)}#editor`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-brand-50"
            >
              {dict.home.cta}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdSlot slot="sidebar" dict={dict} className="my-0" />
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
