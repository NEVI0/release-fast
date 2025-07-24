import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserSession } from '@app/actions';
import { getSEOTags } from '@app/helpers';

import { Form, Header } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Feedback`,
  description: `${DOCUMENT_HEAD.TITLE} · Give us your feedback`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

export default async function FeedbackPage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/');

  return (
    <>
      <Header />
      <Form session={session} />
    </>
  );
}
