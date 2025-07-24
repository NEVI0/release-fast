import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import { fetchUserSession } from '@app/actions';
import { Form, Header } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Create Project`,
  description: `${DOCUMENT_HEAD.TITLE} · Create a new project`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

export default async function CreatePage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/');

  return (
    <>
      <Header />
      <Form session={session} />
    </>
  );
}
