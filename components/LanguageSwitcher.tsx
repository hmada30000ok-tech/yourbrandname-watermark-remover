import { LOCALE_NAMES, type Locale } from '@/config/site';
import { localizedPath, otherLocale, type PageKey } from '@/lib/routes';
import { GlobeIcon } from '@/components/ui/Icons';

interface Props {
  locale: Locale;
  page: PageKey;
  label: string;
}

export default function LanguageSwitcher({ locale, page, label }: Props) {
  const target = otherLocale(locale);

  return (
    <a
      href={localizedPath(page, target)}
      hrefLang={target}
      lang={target}
      className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 transition hover:border-brand-400 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
      aria-label={`${label}: ${LOCALE_NAMES[target]}`}
    >
      <GlobeIcon className="h-4 w-4" />
      <span>{LOCALE_NAMES[target]}</span>
    </a>
  );
}
