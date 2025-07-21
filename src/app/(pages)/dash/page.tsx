import { Suspense } from 'react';

import { HorizontalDivider } from '@app/components/ui';
import { Cards, Construction, Header, LoadingCards } from './_components';

export default function DashboardPage() {
  return (
    <>
      <Header />

      <Suspense fallback={<LoadingCards />}>
        <Cards />
      </Suspense>

      <HorizontalDivider />
      <Construction />
    </>
  );
}
