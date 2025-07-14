'use client';

import { UserAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';

import makeFetchPlansUseCase from '@factories/useCases/makeFetchPlansUseCase';
import { useStripe } from '@app/hooks';

import { Plan } from './components';

interface PlansProps {
  user: UserAbstract;
}

export default function Plans({ user }: PlansProps) {
  const plans = makeFetchPlansUseCase().execute();

  const { createCheckout } = useStripe();

  return (
    <section className="flex items-center gap-4">
      {plans.map((plan) => (
        <Plan
          key={plan.id}
          title={PLAN_DETAILS_BY_TYPE[plan.type].name}
          price={plan.price}
          features={plan.features}
          variant={plan.type === 'pro' ? 'main' : 'normal'}
          disableSelectButton={plan.type === user.plan}
          onSelect={() => {
            createCheckout({
              plan: plan.type,
            });
          }}
        />
      ))}
    </section>
  );
}
