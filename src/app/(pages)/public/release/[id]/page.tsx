import { fetchReleaseByIdAction } from '@app/actions';

import { Content } from './_components';

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

  if (!release) return <p>nada</p>;
  return <Content release={release} />;
}
