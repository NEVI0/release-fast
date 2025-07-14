import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'My account', href: '/dash/profile' },
          { label: 'Select plan', href: '/dash/select-plan' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Select your <strong className="text-primary">plan</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Choose between one of the 3 options below
        </h2>
      </div>
    </section>
  );
}
