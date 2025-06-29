import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { fetchUserSession } from '@app/actions';
import { Header, List, LoadingList } from './_components';

export default async function ProjectsPage() {
  const session = await fetchUserSession();
  if (!session || !session.user) return redirect('/auth');

  const columns = [
    { id: 'name', children: 'Nome' },
    { id: 'description', children: 'Descrição' },
    { id: 'createdAt', children: 'Criação em' },
    { id: 'updatedAt', children: 'Última atualização em' },
    { id: 'details', children: 'Detalhes', center: true },
  ];

  return (
    <>
      <Header />

      <Suspense fallback={<LoadingList columns={columns} />}>
        <List session={session} columns={columns} />
      </Suspense>
    </>
  );
}
