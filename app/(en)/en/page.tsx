import HomePage from '@/components/pages/HomePage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('en', 'home');

export default function Page() {
  return <HomePage locale="en" dict={getDictionary('en')} />;
}
