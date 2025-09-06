import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { isUserInFreeTrial } from '@domain/helpers';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchProjectByIdAction, fetchUserByIdAction } from '@app/actions';
import { getSEOTags } from '@app/helpers';

import { HorizontalDivider } from '@app/components/ui';
import {
  Cards,
  Header,
  List,
  LoadingList,
  NotFound,
  Settings,
} from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Project Details`,
  description: `${DOCUMENT_HEAD.TITLE} · Project details`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

interface Params {
  id: string;
}

interface ProjectPageProps {
  params: Promise<Params>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/');

  const { plan, createdAt } = user;

  const isFreeTrial = isUserInFreeTrial(createdAt);
  const canSeeProjectDetails = plan === 'free' ? isFreeTrial : true;

  if (!canSeeProjectDetails) return redirect('/dash/projects');

  const { project } = await fetchProjectByIdAction({ id });
  if (!project) return <NotFound />;

  return (
    <>
      <Header project={project} />
      <Cards project={project} />

      <Suspense fallback={<LoadingList project={project} />}>
        <List project={project} />
      </Suspense>

      <HorizontalDivider />
      <Settings project={project} />
    </>
  );
}
