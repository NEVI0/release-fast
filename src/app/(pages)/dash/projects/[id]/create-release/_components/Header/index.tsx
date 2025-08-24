import { useTranslations } from 'next-intl';

import { ProjectAbstract } from '@domain/entities';
import { Breadcrumb } from '@app/components/ui';

interface HeaderProps {
  project: ProjectAbstract;
}

export default function Header({ project }: HeaderProps) {
  const t = useTranslations('page.createRelease');
  const compT = useTranslations('component.breadcrumb');

  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: compT('dash'), href: '/dash' },
          { label: compT('projects'), href: '/dash/projects' },
          { label: project.name, href: `/dash/projects/${project.id}` },
          {
            label: compT('createRelease'),
            href: `/dash/projects/${project.id}/create-release`,
          },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          {t.rich('title', {
            strong: (chunk) => (
              <strong className="text-primary">{chunk}</strong>
            ),
          })}
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          {t('subtitle', { name: project.name })}
        </h2>
      </div>
    </section>
  );
}
