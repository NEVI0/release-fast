import { redirect } from 'next/navigation';

import { fetchUserSession } from '@app/actions';

import { HorizontalDivider } from '@app/components/ui';
import { Cards, Header, Settings } from './_components';

export default async function ProfilePage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  return (
    <>
      <Header session={session} />
      <Cards session={session} />
      <HorizontalDivider />
      <Settings session={session} />
    </>
  );
}
