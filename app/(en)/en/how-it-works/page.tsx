import HowItWorksPage from '@/components/pages/HowItWorksPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('en', 'howItWorks');

export default function Page() {
  return <HowItWorksPage locale="en" dict={getDictionary('en')} />;
}
