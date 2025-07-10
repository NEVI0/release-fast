import { Suspense } from 'react';

import { fetchReleaseByIdAction } from '@app/actions';
import { Content, LoadingContent } from './_components';

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

  return (
    <Suspense fallback={<LoadingContent />}>
      <Content release={release} />
    </Suspense>
  );
}
