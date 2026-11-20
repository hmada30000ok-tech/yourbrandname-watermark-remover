import PrivacyPage from '@/components/pages/PrivacyPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('ar', 'privacy');

export default function Page() {
  return <PrivacyPage locale="ar" dict={getDictionary('ar')} />;
}
