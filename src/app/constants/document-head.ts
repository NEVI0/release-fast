import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';

const TITLE = 'Release Fast';
const DESCRIPTION = "Generate changelogs of your software's with AI";
const DOMAIN = 'https://releasefast.io';

const SCHEMA_MARKUP = {
  '@context': DOMAIN,
  '@type': 'SoftwareApplication',
  name: TITLE,
  url: DOMAIN,
  image: `${DOMAIN}/opengraph-image.png`,
  description:
    'Release Fast is a micro-SaaS that automates changelogs and user notifications. Connect your GitHub repository and instantly generate AI-powered release notes.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
  offers: {
    '@type': 'Offer',
    price: PLAN_DETAILS_BY_TYPE['starter'].value,
    priceCurrency: 'USD',
  },
  creator: {
    '@type': 'Organization',
    name: TITLE,
    url: DOMAIN,
    logo: {
      '@type': 'ImageObject',
      url: `${DOMAIN}/images/logo-dark.png`,
    },
  },
};

export const DOCUMENT_HEAD = {
  TITLE,
  DESCRIPTION,
  KEYWORDS: [
    'generate changelog with AI',
    'generate release with AI',
    'automate release notes',
    'AI code documentation',
    'changelog GitHub generator',
  ],
  DOMAIN,
  CANONICAL_URL: '/',
  LOCALE: 'en',
  SCHEMA_MARKUP,
};
