import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { getSEOTags } from '@app/helpers';

import { fetchUserByIdAction } from '@app/actions';
import { Header, Form } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Edit account`,
  description: `${DOCUMENT_HEAD.TITLE} · Edit your account`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

export default async function EditPage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/');

  return (
    <>
      <Header />
      <Form user={user} />
    </>
  );
}
