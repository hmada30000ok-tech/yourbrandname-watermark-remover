import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import { localizedPath } from '@/lib/routes';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import { ArrowIcon, ClockIcon, CropIcon, DownloadIcon, UploadIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

const stepIcons = [UploadIcon, CropIcon, ClockIcon, DownloadIcon];

export default function HowItWorksPage({ locale, dict }: Props) {
  const content = dict.howItWorks;

  return (
    <SiteLayout locale={locale} page="howItWorks" dict={dict}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article className="min-w-0">
          <header className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-ink-600">{content.intro}</p>
          </header>

          <section className="mt-10">
            <h2 className="text-xl font-extrabold text-ink-900">{content.stepsTitle}</h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {content.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <li key={step.title} className="rounded-2xl border border-ink-200 bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold text-ink-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-4 font-bold text-ink-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </section>

          <AdSlot slot="inContent" dict={dict} />

          <section className="mt-8">
            <h2 className="text-2xl font-extrabold text-ink-900">{content.contentTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-600">{content.contentIntro}</p>

            <div className="mt-6 space-y-8">
              {content.sections.map((section) => (
                <article key={section.title} className="rounded-2xl border border-ink-200 bg-white p-5 sm:p-7">
                  <h3 className="text-lg font-extrabold text-ink-900">{section.title}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-7 text-ink-700">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-6 text-ink-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-extrabold text-ink-900">{content.faqTitle}</h2>
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
            <p className="text-lg font-bold">{content.cta}</p>
            <a
              href={`${localizedPath('home', locale)}#editor`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700 hover:bg-brand-50"
            >
              {content.cta}
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
