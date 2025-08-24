import { useTranslations } from 'next-intl';
import { Breadcrumb } from '@app/components/ui';

export default function Header() {
  const t = useTranslations('page.editAccount');
  const compT = useTranslations('component.breadcrumb');

  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb
        items={[
          { label: compT('dash'), href: '/dash' },
          { label: compT('account'), href: '/dash/profile' },
          { label: compT('editAccount'), href: '/dash/profile/edit' },
        ]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          {t.rich('subtitle', {
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
