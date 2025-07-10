import { fetchReleaseByIdAction } from '@app/actions';

import { Content, NotFound } from './_components';

interface Params {
  id: string;
}

interface PublicReleasePageProps {
  params: Promise<Params>;
}

export default async function PublicReleasePage({
  params,
}: PublicReleasePageProps) {
  const { id } = await params;
  const { release } = await fetchReleaseByIdAction({ id });

  if (!release) return <NotFound />;
  return <Content release={release} />;
}
