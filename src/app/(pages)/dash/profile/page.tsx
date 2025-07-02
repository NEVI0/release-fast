import { redirect } from 'next/navigation';

import { fetchUserByIdAction, fetchUserSession } from '@app/actions';

import { HorizontalDivider } from '@app/components/ui';
import { Cards, Header, Settings } from './_components';

export default async function ProfilePage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  const { user } = await fetchUserByIdAction({ id: session.user.id });
  if (!user) return redirect('/auth');

  return (
    <>
      <Header user={user} />
      <Cards user={user} />
      <HorizontalDivider />
      <Settings user={user} />
    </>
  );
}
