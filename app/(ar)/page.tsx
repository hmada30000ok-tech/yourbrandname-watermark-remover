import HomePage from '@/components/pages/HomePage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('ar', 'home');

export default function Page() {
  return <HomePage locale="ar" dict={getDictionary('ar')} />;
}
