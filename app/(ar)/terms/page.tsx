import TermsPage from '@/components/pages/TermsPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('ar', 'terms');

export default function Page() {
  return <TermsPage locale="ar" dict={getDictionary('ar')} />;
}
