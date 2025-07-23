import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { isUserInFreeTrial } from '@domain/helpers';
import { fetchUserByIdAction } from '@app/actions';

import { HorizontalDivider } from '@app/components/ui';
import { Cards, Construction, Header, LoadingCards } from './_components';
import { Warning } from '@app/components/common';

export default async function DashboardPage() {
  const { user } = await fetchUserByIdAction();
  if (!user) return redirect('/auth');

  const { plan, createdAt } = user;

  const isFreeTrial = isUserInFreeTrial(createdAt);
  const hasFullAccess = plan === 'free' ? isFreeTrial : true;

  return (
    <>
      <Header />

      <Suspense fallback={<LoadingCards />}>
        <Cards />
      </Suspense>

      {!hasFullAccess && (
        <Warning message="Your free trial has ended! Some features are now limited. Upgrade your plan to keep using it with all the features." />
      )}

      <HorizontalDivider />
      <Construction />
    </>
  );
}
