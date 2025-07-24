import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';

import { fetchUserSession } from '@app/actions';
import { Form, Header } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Create Project`,
  description: `${DOCUMENT_HEAD.TITLE} · Create a new project`,
};

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
