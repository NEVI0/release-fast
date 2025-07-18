import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';

import { fetchUserByIdAction, fetchUserSession } from '@app/actions';
import { Header, Form } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Edit account`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

export default async function EditPage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  const { user } = await fetchUserByIdAction({ id: session.user.id });
  if (!user) return redirect('/auth');

  return (
    <>
      <Header />
      <Form user={user} />
    </>
  );
}
