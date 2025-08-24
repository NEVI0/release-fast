import { useTranslations } from 'next-intl';

import { UserAbstract } from '@domain/entities';
import { Breadcrumb } from '@app/components/ui';

interface HeaderProps {
  user: UserAbstract;
}

export default function Header({ user }: HeaderProps) {
  const t = useTranslations('page.account');
  const compT = useTranslations('component.breadcrumb');

  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: compT('dash'), href: '/dash' },
          { label: compT('account'), href: '/profile' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          {t.rich('title', {
            name: user.name,
            strong: (chunk) => (
              <strong className="text-primary">{chunk}</strong>
            ),
          })}
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          {t('subtitle')}
        </h2>
      </div>
    </section>
  );
}
