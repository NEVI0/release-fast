import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import { Dash, TopLoader } from '@app/components/common';
import { DOCUMENT_HEAD } from '@app/constants/document-head';

import '@app/css/dash.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} | Dashboard`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/logo.png" type="image/png" sizes="24x24" /> */}
      </head>

      <body className={sourceSans3.className} suppressHydrationWarning>
        <TopLoader />

        <Dash.Wrapper>
          <Dash.Sidebar />
          <Dash.Content>{children}</Dash.Content>
        </Dash.Wrapper>
      </body>
    </html>
  );
}
