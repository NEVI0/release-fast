import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation } from '@app/components/ui';

export default function Construction() {
  const t = useTranslations('page.dash.feedback');

  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex items-center justify-center mr-[-64px]">
        <Animation
          animation={ANIMATIONS.CONSTRUCTION}
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-2 h-auto md:h-[152px]">
          <h2 className="text-2xl font-semibold">{t('title')}</h2>

          <p className="text-text-secondary">
            {t.rich('description', {
              strong: (chunk) => (
                <strong className="font-semibold">{chunk}</strong>
              ),
            })}
          </p>
        </div>

        <Link href="/dash/feedback">
          <strong className="text-primary font-semibold underline">
            {t('link')}
          </strong>
        </Link>
      </div>
    </section>
  );
}
