import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { ARTICLES, articlePath, getArticleContent } from '@/lib/articles';
import { localizedPath } from '@/lib/routes';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import EditorDynamic from '@/components/EditorDynamic';
import DemoSection from '@/components/DemoSection';
import {
  ArrowIcon,
  CheckIcon,
  CropIcon,
  ShieldIcon,
  UploadIcon,
} from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

const useCaseIcons = [UploadIcon, ShieldIcon, CropIcon];

export default function HomePage({ locale, dict }: Props) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.home.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <SiteLayout locale={locale} page="home" dict={dict}>
      {/* 1. Hero */}
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

      {/* 2. Editor / upload, above the fold */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
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

      {/* 3. Trust strip, right under the upload */}
      <section
        className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label={locale === 'ar' ? 'لماذا تثق بالأداة' : 'Why trust the tool'}
      >
        <ul className="flex flex-wrap gap-2">
          {dict.home.trustStrip.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800"
            >
              <CheckIcon className="h-3.5 w-3.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Sample-video demo with real before/after stills */}
      <DemoSection locale={locale} dict={dict} />

      {/* 5. How it works — 3 steps */}
      <section
        className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="how-title"
      >
        <h2 id="how-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
          {dict.home.howTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">{dict.home.howText}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {dict.home.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-ink-200 bg-white p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 font-bold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{step.text}</p>
            </article>
          ))}
        </div>
        <a
          href={localizedPath('howItWorks', locale)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800"
        >
          {dict.home.ctaSecondary}
          <ArrowIcon className="h-4 w-4" />
        </a>
      </section>

      {/* 6. Methods comparison + honest limits */}
      <section
        className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="methods-title"
      >
        <h2 id="methods-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
          {dict.home.methodsTitle}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-600">
          {dict.home.methodsIntro}
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {dict.home.methods.map((method, index) => (
            <article
              key={method.name}
              className={`rounded-2xl border p-5 ${
                index === 0
                  ? 'border-brand-300 bg-brand-50'
                  : 'border-ink-200 bg-white'
              }`}
            >
              <h3 className="font-bold text-ink-900">{method.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{method.how}</p>
              <p className="mt-3 text-sm leading-6 text-ink-800">
                <span className="font-bold text-emerald-700">
                  {locale === 'ar' ? 'الأفضل: ' : 'Best for: '}
                </span>
                {method.best}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-800">
                <span className="font-bold text-amber-700">
                  {locale === 'ar' ? 'العيب: ' : 'Downside: '}
                </span>
                {method.downside}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-ink-200 bg-white p-5 sm:p-6">
          <h3 className="font-bold text-ink-900">{dict.home.limitsTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-ink-600">{dict.home.limitsIntro}</p>
          <ul className="mt-4 space-y-2.5">
            {dict.home.limits.map((limit) => (
              <li key={limit} className="flex items-start gap-2 text-sm leading-6 text-ink-700">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                {limit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Use cases / who it is for */}
      <section
        className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="usecases-title"
      >
        <h2 id="usecases-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
          {dict.home.useCasesTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
          {dict.home.useCasesIntro}
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {dict.home.useCases.map((useCase, index) => {
            const Icon = useCaseIcons[index];
            return (
              <article
                key={useCase.title}
                className="rounded-2xl border border-ink-200 bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink-900">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{useCase.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 8. Articles */}
      <section
        className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="articles-title"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="articles-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
              {locale === 'ar' ? 'مقالات وأدلة تساعدك' : 'Articles and guides to help you'}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
              {locale === 'ar'
                ? 'أدلة عملية تساعدك على إزالة العلامة المائية بجودة أفضل — من إعدادات التصدير إلى إزالة العلامات من تيك توك ويوتيوب وكاب كات.'
                : 'Practical guides to help you remove watermarks with better quality — from export settings to removing marks from TikTok, YouTube and CapCut.'}
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

      {/* 9. Homepage FAQ with FAQPage structured data */}
      <section
        className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="faq-title"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <h2 id="faq-title" className="text-xl font-extrabold text-ink-900 sm:text-2xl">
          {dict.home.faqTitle}
        </h2>
        <div className="mt-5 space-y-3">
          {dict.home.faq.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-ink-200 bg-white px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink-900">
                {item.q}
                <span aria-hidden="true" className="shrink-0 text-xl font-bold text-brand-600">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 10. Final CTA repeating the upload */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl bg-ink-900 p-6 text-white sm:p-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">{dict.home.finalCtaTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-300">{dict.home.finalCtaText}</p>
          </div>
          <div className="flex items-center">
            <a
              href="#editor"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-ink-900 hover:bg-ink-100"
            >
              {dict.home.finalCtaButton}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
