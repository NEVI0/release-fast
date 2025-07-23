import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserByIdAction } from '@app/actions';

import { HorizontalDivider } from '@app/components/ui';
import { Cards, Header, Settings } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Profile`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

export default async function ProfilePage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/auth');

  return (
    <>
      <Header user={user} />
      <Cards user={user} />
      <HorizontalDivider />
      <Settings user={user} />
    </>
  );
}
