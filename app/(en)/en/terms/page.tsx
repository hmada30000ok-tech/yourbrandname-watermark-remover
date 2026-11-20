import TermsPage from '@/components/pages/TermsPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('en', 'terms');

export default function Page() {
  return <TermsPage locale="en" dict={getDictionary('en')} />;
}
