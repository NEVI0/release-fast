import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserByIdAction } from '@app/actions';
import { getSEOTags } from '@app/helpers';

import { HorizontalDivider } from '@app/components/ui';
import { Cards, Header, Settings } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Profile`,
  description: `${DOCUMENT_HEAD.TITLE} · Your profile`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

export default async function ProfilePage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/');

  return (
    <>
      <Header user={user} />
      <Cards user={user} />
      <HorizontalDivider />
      <Settings user={user} />
    </>
  );
}
