import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { ADSENSE_CLIENT_ID } from '@/config/ads';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google Search Console ownership verification. */}
        <meta
          name="google-site-verification"
          content="lCAktPY6Xt65d0d_glqY00Ofmz2uH80uGTKoUCp7eQY"
        />
        {/*
          AdSense verification + Auto ads script. It must be in the raw HTML
          (not injected after cookie consent) so Google's crawler can find it.
          Same id as AdSlot checks, so it is never loaded twice. The ad slots
          themselves still wait for the user's cookie consent.
        */}
        <script
          id="adsense-script"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
