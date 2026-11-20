import ContactPage from '@/components/pages/ContactPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('en', 'contact');

export default function Page() {
  return <ContactPage locale="en" dict={getDictionary('en')} />;
}
