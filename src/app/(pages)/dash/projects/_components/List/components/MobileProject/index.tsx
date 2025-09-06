import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ChevronRight } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { Button } from '@app/components/ui';

interface MobileProjectProps {
  project: ProjectAbstract;
}

export default function MobileProject({ project }: MobileProjectProps) {
  const t = useTranslations('page.projects.list');

  return (
    <div className="flex flex-col px-8 py-6 gap-6 w-full border border-border rounded-2xl bg-container">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-text-secondary">{project.description}</p>
      </div>

      <Link href={`/dash/projects/${project.id}`} className="w-full">
        <Button className="w-full">
          {t('column.five')} <Button.Icon icon={ChevronRight} />
        </Button>
      </Link>
    </div>
  );
}
