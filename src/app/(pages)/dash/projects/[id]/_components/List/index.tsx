import { ProjectAbstract } from '@domain/entities';

import { fetchAllReleasesAction } from '@app/actions';
import { Data, NotFound } from './components';

interface ListProps {
  project: ProjectAbstract;
}

export default async function List({ project }: ListProps) {
  const { releases } = await fetchAllReleasesAction({ projectId: project.id });
  if (!releases.length) return <NotFound id={project.id} />;

  return <Data id={project.id} releases={releases} />;
}
