import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserByIdAction, fetchUserSession } from '@app/actions';

import { Header, Info, Plans } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Plans`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

export default async function PlansPage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  const { user } = await fetchUserByIdAction({ id: session.user.id });
  if (!user) return redirect('/auth');

  return (
    <>
      <Header />
      <Plans user={user} />
      <Info user={user} />
    </>
  );
}
