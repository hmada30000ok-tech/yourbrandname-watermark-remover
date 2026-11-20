import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { getArticleContent, type Article } from '@/lib/articles';
import { localizedPath } from '@/lib/routes';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import ArticleSections from '@/components/pages/ArticleSections';
import { ArrowIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
  article: Article;
}

export default function ArticleDetailPage({ locale, dict, article }: Props) {
  const content = getArticleContent(article, locale);
  const backLabel = locale === 'ar' ? 'كل المقالات' : 'All articles';
  const faqTitle = locale === 'ar' ? 'أسئلة شائعة' : 'Frequently asked questions';
  const minutesLabel =
    locale === 'ar' ? `${content.readingMinutes} دقائق قراءة` : `${content.readingMinutes} min read`;

  return (
    <SiteLayout locale={locale} page="articles" dict={dict}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article className="min-w-0">
          <a
            href={localizedPath('articles', locale)}
            className="text-sm font-bold text-brand-700 hover:text-brand-800"
          >
            ← {backLabel}
          </a>
          <header className="mt-4 max-w-3xl">
            <p className="text-xs font-bold text-brand-700">{minutesLabel}</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-ink-600">{content.excerpt}</p>
          </header>

          <figure className="mt-8">
            <img
              src={article.image.src}
              alt={locale === 'ar' ? article.image.altAr : article.image.altEn}
              width={1200}
              height={675}
              loading="lazy"
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-xs text-ink-400">
              {locale === 'ar' ? article.image.creditAr : article.image.creditEn}
            </figcaption>
          </figure>

          <ArticleSections sections={content.sections} />

          <AdSlot slot="inContent" dict={dict} />

          <section className="mt-10">
            <h2 className="text-xl font-extrabold text-ink-900">{faqTitle}</h2>
            <div className="mt-4 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
              {content.faq.map((item) => (
                <details key={item.q} className="group p-4 sm:p-5">
                  <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 rounded-2xl bg-brand-600 p-6 text-white sm:p-8">
            <p className="text-lg font-bold">{content.ctaTitle}</p>
            <p className="mt-2 text-sm leading-6 text-brand-50">{content.ctaText}</p>
            <a
              href={`${localizedPath('home', locale)}#editor`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-brand-50"
            >
              {dict.home.cta}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdSlot slot="sidebar" dict={dict} className="my-0" />
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
