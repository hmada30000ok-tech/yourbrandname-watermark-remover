import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { ARTICLES, articlePath, getArticleContent } from '@/lib/articles';
import { localizedPath } from '@/lib/routes';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import EditorDynamic from '@/components/EditorDynamic';
import { ArrowIcon, CropIcon, ShieldIcon, UploadIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

const featureIcons = [ShieldIcon, UploadIcon, CropIcon];

export default function HomePage({ locale, dict }: Props) {
  return (
    <SiteLayout locale={locale} page="home" dict={dict}>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
              {dict.home.eyebrow}
            </p>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              {dict.home.title}{' '}
              <span className="mt-2 block text-brand-600">{dict.home.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              {dict.home.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#editor"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
              >
                {dict.home.cta}
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={localizedPath('howItWorks', locale)}
                className="inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-white px-6 py-3 text-sm font-bold text-ink-800 transition hover:bg-ink-50"
              >
                {dict.home.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-labelledby="features-title">
        <h2 id="features-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
          {dict.home.featuresTitle}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {dict.home.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article key={feature.title} className="rounded-2xl border border-ink-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <div className="min-w-0">
          <EditorDynamic locale={locale} dict={dict} />
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdSlot slot="sidebar" dict={dict} className="my-0" />
            <div className="mt-4 rounded-2xl border border-ink-200 bg-white p-5">
              <p className="text-sm font-bold text-ink-900">{dict.home.privacyTitle}</p>
              <p className="mt-2 text-xs leading-6 text-ink-600">{dict.home.privacyText}</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8" aria-labelledby="articles-title">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="articles-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
              {locale === 'ar' ? 'مقالات وأدلة تساعدك' : 'Articles and guides to help you'}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
              {locale === 'ar'
                ? 'اقرأ كيف تزيل العلامة المائية دون فقدان الجودة، وكيف يعمل مرشح delogo، وأفضل الإعدادات قبل المعالجة.'
                : 'Read how to remove a watermark without losing quality, how the delogo filter works, and the best settings before processing.'}
            </p>
          </div>
          <a
            href={localizedPath('articles', locale)}
            className="inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-white px-5 py-2.5 text-sm font-bold text-ink-800 hover:bg-ink-50"
          >
            {locale === 'ar' ? 'كل المقالات' : 'All articles'}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold text-brand-700">
                    {locale === 'ar'
                      ? `${content.readingMinutes} دقائق قراءة`
                      : `${content.readingMinutes} min read`}
                  </p>
                  <h3 className="mt-2 font-bold leading-6 text-ink-900">
                    <a href={articlePath(article, locale)} className="hover:text-brand-700">
                      {content.title}
                    </a>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink-600">{content.excerpt}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot slot="inContent" dict={dict} />
      </div>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl bg-ink-900 p-6 text-white sm:p-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">{dict.home.howTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-300">{dict.home.howText}</p>
          </div>
          <div className="flex items-center">
            <a
              href={localizedPath('howItWorks', locale)}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-ink-900 hover:bg-ink-100"
            >
              {dict.home.ctaSecondary}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
