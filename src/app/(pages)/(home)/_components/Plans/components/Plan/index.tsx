import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

import { Badge, Button } from '@app/components/ui';
import { concatClasses, formatToCurrency } from '@app/helpers';

type PlanVariant = 'normal' | 'main';

interface PlanProps {
  title: string;
  price: number;
  features: string[];
  variant?: PlanVariant;
}

export default function Plan({
  title,
  price,
  features,
  variant = 'normal',
}: PlanProps) {
  const t = useTranslations('component.plan');

  return (
    <div
      className={concatClasses(
        'relative flex flex-col justify-between bg-container border border-border p-8 rounded-3xl w-full lg:w-[364px] h-[500px] lg:h-[464px]',
        variant === 'main' && 'border-2 border-primary lg:h-[500px] shadow-lg'
      )}
    >
      {variant === 'main' && (
        <div className="absolute top-[-12px] right-[50%] translate-x-[50%]">
          <Badge variant="primary">{t('popular')}</Badge>
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-center">{title}</h3>

          <div className="flex items-end justify-center gap-2">
            <p
              className={concatClasses(
                'text-4xl font-bold',
                variant === 'main' && 'text-primary'
              )}
            >
              {formatToCurrency(price)}
            </p>
            <small className="text-sm text-text-secondary mb-[4px]">
              /{t('period')}
            </small>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <li key={`${feature}-${index}`} className="flex items-center gap-2">
              <div>
                <Check className="text-green-500 size-4" />
              </div>{' '}
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/access">
        <Button
          variant={variant === 'main' ? 'primary' : 'default'}
          className="w-full"
        >
          {t('button.start')}
        </Button>
      </Link>
    </div>
  );
}
