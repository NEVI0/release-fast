import { Book, Calendar, Code2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { formatDate } from '@app/helpers';

import { Card } from '@app/components/common';

interface CardsProps {
  project: ProjectAbstract;
}

export default function Cards({ project }: CardsProps) {
  return (
    <section className="flex items-center justify-between gap-4">
      <Card title="Versões criadas" value="33" icon={Code2} />
      <Card title="Última versão" value="v1.2.4" icon={Book} />
      <Card
        title="Criado em"
        value={formatDate(project.createdAt, 'DD of MMMM of YYYY')}
        icon={Calendar}
      />
    </section>
  );
}
