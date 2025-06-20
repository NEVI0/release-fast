import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Projetos', href: '/dash/projects' },
          { label: 'Criar projeto', href: '/dash/projects/create' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Criar <strong className="text-primary">projeto</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Crie um novo projeto para gerenciar suas releases
        </h2>
      </div>
    </section>
  );
}
