import AboutPage from '@/components/pages/AboutPage';
import { getDictionary } from '@/i18n/dictionaries';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('en', 'about');

export default function Page() {
  return <AboutPage locale="en" dict={getDictionary('en')} />;
}
