import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import { Content } from '@app/components/common';
import { GOOGLE_ANALYTICS } from '@app/constants/google-analytics';
import { DOCUMENT_HEAD } from '@app/constants/document-head';

import '@app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Checkout`,
  description: `${DOCUMENT_HEAD.TITLE} · Checkout status`,
};

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

export default function CheckoutLayout({
  children,
}: Readonly<CheckoutLayoutProps>) {
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
        <Content.Public>{children}</Content.Public>
      </body>

      <GoogleAnalytics gaId={GOOGLE_ANALYTICS.ID} />
    </html>
  );
}
