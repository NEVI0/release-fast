import { Source_Sans_3 } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import { Header, Content, Footer, TopLoader } from '@app/components/common';
import { GOOGLE_ANALYTICS } from '@app/constants/google-analytics';
import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import '@app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = getSEOTags({
  name: DOCUMENT_HEAD.TITLE,
  description: DOCUMENT_HEAD.DESCRIPTION,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
  other: DOCUMENT_HEAD.SCHEMA_MARKUP,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={sourceSans3.className} suppressHydrationWarning>
        <TopLoader />

        <Header.Home />
        <Content.Home>{children}</Content.Home>
        <Footer />
      </body>

      <GoogleAnalytics gaId={GOOGLE_ANALYTICS.ID} />
    </html>
  );
}
