import type { Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import ArticleSections from './ArticleSections';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function PrivacyPage({ locale, dict }: Props) {
  return (
    <SiteLayout locale={locale} page="privacy" dict={dict}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article className="min-w-0 max-w-3xl rounded-2xl border border-ink-200 bg-white p-6 sm:p-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {dict.privacy.title}
          </h1>
          <p className="mt-2 text-xs font-semibold text-ink-500">{dict.privacy.updated}</p>
          <ArticleSections sections={dict.privacy.sections} />
        </article>
        <aside className="hidden lg:block">
          <AdSlot slot="sidebar" dict={dict} className="my-0" />
        </aside>
      </div>
    </SiteLayout>
  );
}
