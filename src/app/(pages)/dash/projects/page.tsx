import { Breadcrumb } from '@app/components/ui';

export default function Projects() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/dash' },
            { label: 'Projetos', href: '/projects' },
          ]}
        />

        <div className="flex items-center gap-2">treste</div>
      </header>
    </>
  );
}
