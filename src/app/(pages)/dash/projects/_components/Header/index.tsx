import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Projects', href: '/dash/projects' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          My <strong className="text-primary">Projects</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Manage your projects and their releases
        </h2>
      </div>
    </section>
  );
}
