import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import ArticleSections from './ArticleSections';
import { ShieldIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function AboutPage({ locale, dict }: Props) {
  return (
    <SiteLayout locale={locale} page="about" dict={dict}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article className="min-w-0 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {dict.about.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-ink-600">{dict.about.intro}</p>

          <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-6 sm:p-10">
            <ArticleSections sections={dict.about.sections} />
          </div>

          <section className="mt-9">
            <h2 className="text-xl font-extrabold text-ink-900">{dict.about.principlesTitle}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {dict.about.principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl border border-ink-200 bg-white p-5">
                  <ShieldIcon className="h-5 w-5 text-brand-600" />
                  <h3 className="mt-3 font-bold text-ink-900">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{principle.text}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
        <aside className="hidden lg:block">
          <AdSlot slot="sidebar" dict={dict} className="my-0" />
        </aside>
      </div>
    </SiteLayout>
  );
}
