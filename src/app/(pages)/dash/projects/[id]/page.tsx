import { Suspense } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus } from 'lucide-react';

import { isUserInFreeTrial } from '@domain/helpers';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchProjectByIdAction, fetchUserSession } from '@app/actions';

import { ErrorStatus } from '@app/components/common';
import { Button, HorizontalDivider } from '@app/components/ui';

import { Cards, Header, List, LoadingList, Settings } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Project Details`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

interface Params {
  id: string;
}

interface ProjectPageProps {
  params: Promise<Params>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  const { plan, createdAt } = session.user;

  const isFreeTrial = isUserInFreeTrial(createdAt);
  const canSeeProjectDetails = plan === 'free' ? isFreeTrial : true;

  if (!canSeeProjectDetails) return redirect('/dash/projects');

  const { project } = await fetchProjectByIdAction({ id });

  if (!project) {
    return (
      <ErrorStatus
        title="Oops... nothing found!"
        message="No registered project was found. Try registering a new one by clicking the button below."
      >
        <Link href="/dash/projects/create">
          <Button variant="primary">
            Add new project
            <Button.Icon icon={Plus} />
          </Button>
        </Link>
      </ErrorStatus>
    );
  }

  const columns = [
    { id: 'title', children: 'Title' },
    { id: 'version', children: 'Version' },
    { id: 'createdAt', children: 'Created at' },
    { id: 'updatedAt', children: 'Last updated at' },
    { id: 'details', children: 'Details', center: true },
  ];

  return (
    <>
      <Header project={project} />
      <Cards project={project} />

      <Suspense fallback={<LoadingList columns={columns} project={project} />}>
        <List columns={columns} project={project} />
      </Suspense>

      <HorizontalDivider />
      <Settings project={project} />
    </>
  );
}
