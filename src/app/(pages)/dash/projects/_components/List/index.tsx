import { UserAbstract } from '@domain/entities';
import { fetchAllProjectsAction } from '@app/actions';

import { Data, NotFound } from './components';

interface ListProps {
  user: UserAbstract;
}

export default async function List({ user }: ListProps) {
  const { projects } = await fetchAllProjectsAction({
    userId: user.id,
  });

  if (!projects.length) return <NotFound />;
  return <Data projects={projects} />;
}
