import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import { isUserInFreeTrial } from '@domain/helpers';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchUserByIdAction } from '@app/actions';
import { getSEOTags } from '@app/helpers';

import { EndedTrial, Header, List, LoadingList } from './_components';

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

  return (
    <>
      <Header />

      {!canSeeProjectDetails && <EndedTrial />}

      <Suspense fallback={<LoadingList />}>
        <List user={user} />
      </Suspense>
    </>
  );
}
