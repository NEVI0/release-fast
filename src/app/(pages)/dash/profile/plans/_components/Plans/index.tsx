'use client';
import { useState } from 'react';

import { UserAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';

import makeFetchPlansUseCase from '@factories/useCases/makeFetchPlansUseCase';
import { useStripe } from '@app/hooks';

import { Plan, ProvideEmailModal } from './components';

interface PlansProps {
  user: UserAbstract;
}

export default function Plans({ user }: PlansProps) {
  const plans = makeFetchPlansUseCase().execute();

  const { createCheckout, createPortal } = useStripe();

  const [isProvideEmailModalOpen, setIsProvideEmailModalOpen] = useState(false);

  return (
    <>
      <section className="flex items-center gap-4">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            title={PLAN_DETAILS_BY_TYPE[plan.type].name}
            price={plan.price}
            features={plan.features}
            plan={plan.type}
            currentPlan={user.plan}
            variant={plan.type === 'pro' ? 'main' : 'normal'}
            onUpgrade={() => {
              if (!user.email) return setIsProvideEmailModalOpen(true);
              createPortal();
            }}
            onBuy={() => {
              if (!user.email) return setIsProvideEmailModalOpen(true);
              createCheckout({ plan: plan.type });
            }}
          />
        ))}
      </section>

      <ProvideEmailModal
        user={user}
        isOpen={isProvideEmailModalOpen}
        onClose={() => setIsProvideEmailModalOpen(false)}
      />
    </>
  );
}
