import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import { fetchUserByIdAction } from '@app/actions';
import { Header, Info, Plans } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Plans`,
  description: `${DOCUMENT_HEAD.TITLE} · Plans`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

export default async function PlansPage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/');

  return (
    <>
      <Header />
      <Plans user={user} />
      <Info user={user} />
    </>
  );
}
