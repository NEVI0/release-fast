import { Calendar, Code2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { formatDate } from '@app/helpers';

import { Card } from '@app/components/common';

interface CardsProps {
  project: ProjectAbstract;
}

export default function Cards({ project }: CardsProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Card
        title="Repository"
        value="Access repository"
        valueLink={project.repositoryUrl}
        icon={Code2}
      />

      <Card
        title="Created at"
        value={formatDate(project.createdAt, 'MMMM DD, YYYY')}
        icon={Calendar}
      />

      <Card
        title="Last updated at"
        value={formatDate(project.updatedAt, 'MMMM DD, YYYY')}
        icon={Calendar}
      />
    </section>
  );
}
