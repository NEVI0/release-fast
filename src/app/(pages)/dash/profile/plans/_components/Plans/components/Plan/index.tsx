import { Check, ExternalLink } from 'lucide-react';

import { PlanType } from '@domain/entities';

import { concatClasses, formatToCurrency } from '@app/helpers';
import { Badge, Button } from '@app/components/ui';

type PlanVariant = 'normal' | 'main';

interface PlanProps {
  title: string;
  price: number;
  features: string[];
  variant?: PlanVariant;
  plan: PlanType;
  currentPlan: PlanType;
  onBuy(): void;
  onUpgrade(): void;
}

export default function Plan({
  title,
  price,
  features,
  plan,
  currentPlan,
  variant = 'normal',
  onBuy,
  onUpgrade,
}: PlanProps) {
  const isCurrentPlan = currentPlan === plan;
  const shouldUpgrade = currentPlan !== 'free';

  return (
    <div
      className={concatClasses(
        'relative flex flex-col justify-between bg-container border border-border p-8 rounded-3xl w-full h-[500px]',
        variant === 'main' && 'border-2 border-primary shadow-lg'
      )}
    >
      {variant === 'main' && (
        <div className="absolute top-[-12px] right-[50%] translate-x-[50%]">
          <Badge variant="primary">Most popular</Badge>
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
              /month
            </small>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <li key={`${feature}-${index}`} className="flex items-center gap-2">
              <Check className="text-green-500 size-4" /> {feature}
            </li>
          ))}
        </ul>
      </div>

      {isCurrentPlan ? (
        <div className="h-[48px] flex items-center justify-center">
          <small className="text-text-secondary text-center text-sm">
            This is your current plan!
          </small>
        </div>
      ) : (
        <Button
          variant={variant === 'main' ? 'primary' : 'default'}
          onClick={shouldUpgrade ? onUpgrade : onBuy}
        >
          {shouldUpgrade ? 'Upgrade now' : 'Buy now'}{' '}
          <Button.Icon icon={ExternalLink} />
        </Button>
      )}
    </div>
  );
}
