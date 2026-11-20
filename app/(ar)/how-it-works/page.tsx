import HowItWorksPage from '@/components/pages/HowItWorksPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('ar', 'howItWorks');

export default function Page() {
  return <HowItWorksPage locale="ar" dict={getDictionary('ar')} />;
}
