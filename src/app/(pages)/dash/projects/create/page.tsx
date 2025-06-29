import { redirect } from 'next/navigation';

import { fetchUserSession } from '@app/actions';
import { Form, Header } from './_components';

export default async function CreatePage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  return (
    <>
      <Header />
      <Form session={session} />
    </>
  );
}
