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
          { label: 'Projetos', href: '/dash/projects' },
          { label: project.name, href: `/dash/projects/${project.id}` },
          {
            label: 'Criar release',
            href: `/dash/projects/${project.id}/create-release`,
          },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Nova <strong className="text-primary">release</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Crie uma nova release para o seu projeto: {project.name}
        </h2>
      </div>
    </section>
  );
}
