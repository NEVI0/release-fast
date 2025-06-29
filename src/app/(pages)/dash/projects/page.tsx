import { redirect } from 'next/navigation';

import { fetchUserSession } from '@app/actions';
import { Header, List } from './_components';

export default async function ProjectsPage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  return (
    <>
      <Header />
      <List session={session} />
    </>
  );
}
