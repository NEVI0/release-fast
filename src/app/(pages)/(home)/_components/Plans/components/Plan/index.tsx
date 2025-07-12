import Link from 'next/link';
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
  return (
    <div
      className={concatClasses(
        'relative flex flex-col justify-between bg-container border border-border p-8 rounded-3xl w-[364px] h-[464px]',
        variant === 'main' && 'border-2 border-primary h-[500px] shadow-lg'
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

      <Link href="/access">
        <Button
          variant={variant === 'main' ? 'primary' : 'default'}
          className="w-full"
        >
          Start now for free
        </Button>
      </Link>
    </div>
  );
}
