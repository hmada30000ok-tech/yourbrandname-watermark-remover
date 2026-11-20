import ContactPage from '@/components/pages/ContactPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('ar', 'contact');

export default function Page() {
  return <ContactPage locale="ar" dict={getDictionary('ar')} />;
}
