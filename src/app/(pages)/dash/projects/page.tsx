import { Suspense } from 'react';

import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserSession } from '@app/actions';

import { Header, List, LoadingList } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Projects`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

export default async function ProjectsPage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  const columns = [
    { id: 'name', children: 'Name' },
    { id: 'description', children: 'Description' },
    { id: 'createdAt', children: 'Created at' },
    { id: 'updatedAt', children: 'Last updated at' },
    { id: 'details', children: 'Details', center: true },
  ];

  return (
    <>
      <Header />

      <Suspense fallback={<LoadingList columns={columns} />}>
        <List session={session} columns={columns} />
      </Suspense>
    </>
  );
}
