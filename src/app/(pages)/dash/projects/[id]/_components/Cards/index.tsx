import { Calendar, Code2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { formatDate } from '@app/helpers';

import { Card } from '@app/components/common';

interface CardsProps {
  project: ProjectAbstract;
}

export default function Cards({ project }: CardsProps) {
  return (
    <section className="flex items-center justify-between gap-4">
      <Card
        title="Repositório"
        value="Acessar repositório"
        valueLink={project.repositoryUrl}
        icon={Code2}
      />

      <Card
        title="Criado em"
        value={formatDate(project.createdAt, 'DD of MMMM of YYYY')}
        icon={Calendar}
      />

      <Card
        title="Última atualização em"
        value={formatDate(project.updatedAt, 'DD of MMMM of YYYY')}
        icon={Calendar}
      />
    </section>
  );
}
