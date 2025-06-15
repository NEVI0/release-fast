import { Breadcrumb } from '@app/components/ui';

export default function Settings() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/dash' },
            { label: 'Configurações', href: '/dash/settings' },
          ]}
        />
      </header>
    </>
  );
}
