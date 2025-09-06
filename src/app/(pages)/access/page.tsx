import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ProviderCard } from './_components';

export default function AccessPage() {
  const t = useTranslations('page.access');

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 md:gap-16">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl text-center">
          {t.rich('title', {
            strong: (chunk) => (
              <strong className="text-primary">{chunk}</strong>
            ),
          })}
        </h1>

        <p className="text-center text-text-secondary">
          {t.rich('description', {
            strong: (chunk) => <strong>{chunk}</strong>,
          })}
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center gap-4">
        <ProviderCard provider="github" />
        <ProviderCard provider="gitlab" />
      </section>

      <Link
        href="/"
        className="text-center font-semibold text-sm text-text-secondary underline"
      >
        {t('link')}
      </Link>
    </div>
  );
}
