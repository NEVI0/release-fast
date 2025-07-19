import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Give a feedback', href: '/dash/feedback' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Give a <strong className="text-primary">feedback</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Tell us anything you want
        </h2>
      </div>
    </section>
  );
}
