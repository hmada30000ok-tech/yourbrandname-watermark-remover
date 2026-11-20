import AboutPage from '@/components/pages/AboutPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('ar', 'about');

export default function Page() {
  return <AboutPage locale="ar" dict={getDictionary('ar')} />;
}
