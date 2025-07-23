import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';

import { fetchUserByIdAction } from '@app/actions';
import { Header, Form } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Edit account`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

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
