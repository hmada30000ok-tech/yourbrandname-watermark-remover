import PrivacyPage from '@/components/pages/PrivacyPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('en', 'privacy');

export default function Page() {
  return <PrivacyPage locale="en" dict={getDictionary('en')} />;
}
