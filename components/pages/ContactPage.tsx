import { CONTACT_EMAIL, type Locale } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries';
import SiteLayout from '@/components/SiteLayout';
import AdSlot from '@/components/AdSlot';
import { CheckIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function ContactPage({ locale, dict }: Props) {
  return (
    <SiteLayout locale={locale} page="contact" dict={dict}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article className="min-w-0 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {dict.contact.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-ink-600">{dict.contact.intro}</p>

          <div className="mt-7 rounded-2xl border border-ink-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-500">
              {dict.contact.emailLabel}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block break-all text-lg font-bold text-brand-700 underline underline-offset-4 hover:text-brand-800"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm leading-6 text-ink-600">{dict.contact.emailHint}</p>
            <p className="mt-2 text-xs text-ink-400">{dict.contact.noFormNote}</p>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-extrabold text-ink-900">{dict.contact.topicsTitle}</h2>
            <ul className="mt-4 space-y-3">
              {dict.contact.topics.map((topic) => (
                <li key={topic} className="flex gap-3 text-sm leading-6 text-ink-700">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {topic}
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-8 text-xs leading-6 text-ink-500">{dict.contact.note}</p>
        </article>
        <aside className="hidden lg:block">
          <AdSlot slot="sidebar" dict={dict} className="my-0" />
        </aside>
      </div>
    </SiteLayout>
  );
}
