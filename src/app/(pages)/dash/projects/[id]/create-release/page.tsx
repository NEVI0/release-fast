import { redirect } from 'next/navigation';

import { fetchProjectByIdAction } from '@app/actions';
import { Form, Header } from './_components';

interface Params {
  id: string;
}

interface CreateReleasePageProps {
  params: Promise<Params>;
}

export default async function CreateReleasePage({
  params,
}: CreateReleasePageProps) {
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
