import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'My account', href: '/dash/profile' },
          { label: 'Support', href: '/dash/profile/support' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Open a support <strong className="text-primary">ticket</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Report problems or bugs here
        </h2>
      </div>
    </section>
  );
}
