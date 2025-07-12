import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Projects', href: '/dash/projects' },
          { label: 'Create project', href: '/dash/projects/create' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Create <strong className="text-primary">project</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Create a new project to manage your releases
        </h2>
      </div>
    </section>
  );
}
