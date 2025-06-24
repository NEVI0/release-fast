import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Projetos', href: '/dash/projects' },
          { label: 'Nome do projeto', href: '/dash/projects/1' },
          { label: 'Criar release', href: '/dash/projects/1/create-release' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Nova <strong className="text-primary">release</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Crie uma nova release para o seu projeto
        </h2>
      </div>
    </section>
  );
}
