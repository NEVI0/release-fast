import { Suspense } from 'react';

import { Source_Sans_3 } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import { Content, Toaster, TopLoader } from '@app/components/common';
import { GOOGLE_ANALYTICS } from '@app/constants/google-analytics';
import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import { LoadingContent } from './_components';
import '@app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Version`,
  description: `${DOCUMENT_HEAD.TITLE} · Release version`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({
  children,
}: Readonly<PublicLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          href="/icons/top-logo.png"
          type="image/png"
          sizes="24x24"
        />
      </head>

      <body className={sourceSans3.className} suppressHydrationWarning>
        <TopLoader />

        <Content.Public>
          <Suspense fallback={<LoadingContent />}>{children}</Suspense>
        </Content.Public>

        <Toaster />
      </body>

      <GoogleAnalytics gaId={GOOGLE_ANALYTICS.ID} />
    </html>
  );
}
