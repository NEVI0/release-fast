import { Source_Sans_3 } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import { ThemeProvider } from '@app/contexts';
import {
  Header,
  Content,
  Footer,
  TopLoader,
  Toaster,
} from '@app/components/common';

import { GOOGLE_ANALYTICS } from '@app/constants/google-analytics';
import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import QueryProvider from './query-provider';
import '@app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Dashboard`,
  description: `${DOCUMENT_HEAD.TITLE} · Your dashboard`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Readonly<RootLayoutProps>) {
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
        <QueryProvider>
          <ThemeProvider>
            <TopLoader />

            <Header.Dash />
            <Content.Dash>{children}</Content.Dash>
            <Footer />

            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>

      <GoogleAnalytics gaId={GOOGLE_ANALYTICS.ID} />
    </html>
  );
}
