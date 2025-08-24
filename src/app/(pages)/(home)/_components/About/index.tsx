import { useTranslations } from 'next-intl';

import { Info } from './components';

export default function Research() {
  const t = useTranslations('page.home.about');

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold">{t('title')}</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        <Info variant="secondary" value={t('info.one.value')}>
          <p className="w-full text-center text-text-secondary">
            {t('info.one.description')}
          </p>
        </Info>

        <Info variant="primary" value={t('info.two.value')}>
          <p className="w-full text-center text-text-secondary">
            {t('info.two.description')}
          </p>
        </Info>

        <Info variant="secondary" value={t('info.three.value')}>
          <p className="w-full text-center text-text-secondary">
            {t('info.three.description')}
          </p>
        </Info>
      </div>

      <p className="text-center w-full md:w-[50%]">
        {t.rich('description', {
          strong: (chunk) => <strong className="font-semibold">{chunk}</strong>,
        })}
      </p>
    </section>
  );
}
