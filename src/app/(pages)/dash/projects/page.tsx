import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import { isUserInFreeTrial } from '@domain/helpers';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserByIdAction, fetchUserSession } from '@app/actions';
import { getSEOTags } from '@app/helpers';

import { Warning } from '@app/components/common';
import { Header, List, LoadingList } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Projects`,
  description: `${DOCUMENT_HEAD.TITLE} · Your projects`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

export default async function ProjectsPage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/');

  const { plan, createdAt } = user;

  const isFreeTrial = isUserInFreeTrial(createdAt);
  const canSeeProjectDetails = plan === 'free' ? isFreeTrial : true;

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

      {!canSeeProjectDetails && (
        <Warning message="You can not access your projects unless you upgrade your current plan!" />
      )}

      <Suspense fallback={<LoadingList columns={columns} />}>
        <List user={user} columns={columns} />
      </Suspense>
    </>
  );
}
