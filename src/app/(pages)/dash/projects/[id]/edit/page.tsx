import { redirect } from 'next/navigation';

import { DOCUMENT_HEAD } from '@app/constants/document-head';
import { fetchProjectByIdAction, fetchUserSession } from '@app/actions';
import { getSEOTags } from '@app/helpers';

import { Form, Header } from './_components';

export const metadata = getSEOTags({
  name: `${DOCUMENT_HEAD.TITLE} · Edit Project`,
  description: `${DOCUMENT_HEAD.TITLE} · Edit your project`,
  keywords: DOCUMENT_HEAD.KEYWORDS,
  domain: DOCUMENT_HEAD.DOMAIN,
  locale: DOCUMENT_HEAD.LOCALE,
  canonicalUrlRelative: DOCUMENT_HEAD.CANONICAL_URL,
});

interface Params {
  id: string;
}

interface EditPageProps {
  params: Promise<Params>;
}

export default async function EditPage({ params }: EditPageProps) {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/');

  const { id } = await params;
  const { project } = await fetchProjectByIdAction({ id });

  if (!project) return redirect('/dash/projects');

  return (
    <>
      <Header project={project} />
      <Form project={project} />
    </>
  );
}
