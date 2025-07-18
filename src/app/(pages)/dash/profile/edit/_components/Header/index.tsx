import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'My account', href: '/dash/profile' },
          { label: 'Edit account', href: '/dash/profile/edit' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Edit <strong className="text-primary">account</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Edit your account data
        </h2>
      </div>
    </section>
  );
}
