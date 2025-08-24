import { Calendar, Code2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ProjectAbstract } from '@domain/entities';
import { formatDate } from '@app/helpers';

import { Card } from '@app/components/common';

interface CardsProps {
  project: ProjectAbstract;
}

export default function Cards({ project }: CardsProps) {
  const t = useTranslations('page.project');

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Card
        title={t('card.one.title')}
        value={t('card.one.value')}
        valueLink={project.repository.url}
        icon={Code2}
      />

      <Card
        title={t('card.two.title')}
        value={formatDate(project.createdAt, 'MMMM DD, YYYY')}
        icon={Calendar}
      />

      <Card
        title={t('card.three.title')}
        value={formatDate(project.updatedAt, 'MMMM DD, YYYY')}
        icon={Calendar}
      />
    </section>
  );
}
