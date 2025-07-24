import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import { Content } from '@app/components/common';
import { DOCUMENT_HEAD } from '@app/constants/document-head';

import '@app/css/globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Checkout`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

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
    </html>
  );
}
