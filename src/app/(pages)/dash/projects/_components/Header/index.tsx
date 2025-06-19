import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Projetos', href: '/projects' },
        ]}
      />

      <header className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Meus <strong className="text-primary">Projetos</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Gerencie seus projetos e suas releases
        </h2>
      </header>
    </>
  );
}
