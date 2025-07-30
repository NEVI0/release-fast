import type { Metadata } from 'next';

interface Params {
  name: string;
  description: string;

  keywords: string[];
  domain: string;
  locale: string;

  canonicalUrlRelative: string;
  other?: object;
}

export default function getSEOTags(params: Params): Metadata {
  return {
    title: params.name,
    description: params.description,

    keywords: params.keywords,
    applicationName: params.name,
    metadataBase: new URL(params.domain),

    openGraph: {
      title: params.name,
      description: params.description,
      url: params.domain,
      siteName: params.name,
      locale: params.locale,
      type: 'website',
    },

    twitter: {
      title: params.name,
      description: params.description,
      site: '@nevio_cm',
      card: 'summary',
      creator: '@nevio_cm',
    },

    alternates: {
      canonical: params.canonicalUrlRelative,
      languages: {
        en: params.canonicalUrlRelative,
      },
    },

    ...(!!params.other && {
      other: {
        'application/ld+json': JSON.stringify(params.other),
      },
    }),
  };
}
