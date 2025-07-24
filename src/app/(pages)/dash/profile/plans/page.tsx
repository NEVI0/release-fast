import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserByIdAction, fetchUserSession } from '@app/actions';

import { Header, Info, Plans } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Plans`,
  description: `${DOCUMENT_HEAD.TITLE} · Plans`,
};

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
