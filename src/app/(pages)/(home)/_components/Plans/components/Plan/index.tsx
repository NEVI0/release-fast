import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

import { PlanAbstract, PlanCurrency } from '@domain/entities';

import { Badge, Button } from '@app/components/ui';
import { concatClasses, formatToCurrency } from '@app/helpers';

interface PlanProps {
  plan: PlanAbstract;
}

const CURRENCY_BY_LOCALE: Record<string, PlanCurrency> = {
  pt: 'BRL',
  en: 'USD',
};

const TITLE_BY_TYPE: Record<PlanAbstract['type'], string> = {
  free: '',
  starter: 'component.plan.starter',
  pro: 'component.plan.pro',
  enterprise: 'component.plan.enterprise',
};

export default function Plan({ plan }: PlanProps) {
  const t = useTranslations();
  const locale = useLocale();

  const variant = plan.type === 'pro' ? 'main' : 'normal';
  const price = plan.price[CURRENCY_BY_LOCALE[locale]];

  return (
    <div
      className={concatClasses(
        'relative flex flex-col justify-between bg-container border border-border p-8 rounded-3xl w-full lg:w-[364px] h-[500px] lg:h-[464px]',
        variant === 'main' && 'border-2 border-primary lg:h-[500px] shadow-lg'
      )}
    >
      {variant === 'main' && (
        <div className="absolute top-[-12px] right-[50%] translate-x-[50%]">
          <Badge variant="primary">{t('component.plan.popular')}</Badge>
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-center">
            {t(TITLE_BY_TYPE[plan.type] as any)}
          </h3>

          <div className="flex items-end justify-center gap-2">
            <p
              className={concatClasses(
                'text-4xl font-bold',
                variant === 'main' && 'text-primary'
              )}
            >
              {formatToCurrency(price, CURRENCY_BY_LOCALE[locale])}
            </p>
            <small className="text-sm text-text-secondary mb-[4px]">
              /{t('component.plan.period')}
            </small>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {plan.features.map((feature, index) => (
            <li key={`${feature}-${index}`} className="flex items-center gap-2">
              <div>
                <Check className="text-green-500 size-4" />
              </div>{' '}
              {t(feature as any)}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/access">
        <Button
          variant={variant === 'main' ? 'primary' : 'default'}
          className="w-full"
        >
          {t('component.plan.button.start')}
        </Button>
      </Link>
    </div>
  );
}
