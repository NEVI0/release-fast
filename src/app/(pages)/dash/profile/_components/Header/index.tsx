import { SessionAbstract } from '@domain/entities';
import { Breadcrumb } from '@app/components/ui';

interface HeaderProps {
  session: SessionAbstract;
}

export default function Header({ session }: HeaderProps) {
  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/dash' },
          { label: 'Minha conta', href: '/profile' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <strong className="text-primary">Olá</strong>, {session.user.name}
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Gerencie suas informações e preferências
        </h2>
      </div>
    </section>
  );
}
