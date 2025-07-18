import { ProjectAbstract } from '@domain/entities';
import { Breadcrumb } from '@app/components/ui';

interface HeaderProps {
  project: ProjectAbstract;
}

export default function Header({ project }: HeaderProps) {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Projects', href: '/dash/projects' },
          { label: project.name, href: `/dash/projects/${project.id}` },
          {
            label: 'Edit project',
            href: `/dash/projects/${project.id}/edit`,
          },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Edit <strong className="text-primary">project</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Update your project data
        </h2>
      </div>
    </section>
  );
}
