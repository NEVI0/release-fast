import { UserAbstract } from '@domain/entities';
import { Breadcrumb } from '@app/components/ui';

interface HeaderProps {
  user: UserAbstract;
}

export default function Header({ user }: HeaderProps) {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'My account', href: '/profile' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <strong className="text-primary">Hello</strong>, {user.name}
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Manage your information and preferences
        </h2>
      </div>
    </section>
  );
}
