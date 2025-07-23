import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchProjectByIdAction, fetchUserSession } from '@app/actions';

import { Form, Header } from './_components';

export const metadata: Metadata = {
  title: `${DOCUMENT_HEAD.TITLE} · Create Release`,
  description: DOCUMENT_HEAD.DESCRIPTION,
};

interface Params {
  id: string;
}

interface CreateReleasePageProps {
  params: Promise<Params>;
}

export default async function CreateReleasePage({
  params,
}: CreateReleasePageProps) {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/');

  const { id } = await params;
  const { project } = await fetchProjectByIdAction({ id });

  if (!project) return redirect('/dash/projects');

  return (
    <>
      <Header project={project} />
      <Form session={session} project={project} />
    </>
  );
}
