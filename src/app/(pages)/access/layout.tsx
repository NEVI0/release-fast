import { Source_Sans_3 } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import { Content } from '@app/components/common';
import { GOOGLE_ANALYTICS } from '@app/constants/google-analytics';
import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import '@app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Access Dashboard`,
  description: `${DOCUMENT_HEAD.TITLE} · Access your GitHub account`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

interface AccessLayoutProps {
  children: React.ReactNode;
}

export default function AccessLayout({
  children,
}: Readonly<AccessLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={sourceSans3.className} suppressHydrationWarning>
        <Content.Public>{children}</Content.Public>
      </body>

      <GoogleAnalytics gaId={GOOGLE_ANALYTICS.ID} />
    </html>
  );
}
