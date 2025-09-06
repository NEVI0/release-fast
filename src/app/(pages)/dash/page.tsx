import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { isUserInFreeTrial } from '@domain/helpers';
import { fetchUserByIdAction } from '@app/actions';

import { HorizontalDivider } from '@app/components/ui';
import {
  Cards,
  Construction,
  EndedTrial,
  Header,
  LoadingCards,
} from './_components';

export default async function DashboardPage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/');

  const { plan, createdAt } = user;

  const isFreeTrial = isUserInFreeTrial(createdAt);
  const hasFullAccess = plan === 'free' ? isFreeTrial : true;

  return (
    <>
      <Header />

      <Suspense fallback={<LoadingCards />}>
        <Cards user={user} />
      </Suspense>

      {!hasFullAccess && <EndedTrial />}

      <HorizontalDivider />
      <Construction />
    </>
  );
}
