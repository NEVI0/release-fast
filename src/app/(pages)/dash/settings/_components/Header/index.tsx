import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Configurações', href: '/settings' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Configurações</h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Gerencie suas configurações
        </h2>
      </div>
    </section>
  );
}
