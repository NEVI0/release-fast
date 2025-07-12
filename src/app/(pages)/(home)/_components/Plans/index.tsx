import Link from 'next/link';

import makeFetchPlansUseCase from '@factories/useCases/makeFetchPlansUseCase';

import { Plan } from './components';
import { PlanType } from '@domain/entities';

const PLAN_NAME_BY_TYPE: Record<PlanType, string> = {
  starter: 'Starter',
  pro: 'Professional',
  enterprise: 'Enterprise',
};

export default function Plans() {
  const plans = makeFetchPlansUseCase().execute();

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center text-2xl font-bold">
          Simple and transparent pricing
        </h2>

        <h3 className="text-center text-xl font-semibold text-text-secondary ">
          Choose the perfect plan for your team's size and needs
        </h3>
      </div>

      <div className="flex items-center justify-center gap-8">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            title={PLAN_NAME_BY_TYPE[plan.type]}
            price={plan.price}
            features={plan.features}
            variant={plan.type === 'pro' ? 'main' : 'normal'}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-center">
          Start using release fast now, with any of the plans above you get{' '}
          <strong className="font-semibold text-primary">
            7 days free trial
          </strong>
          .
        </p>

        <span className="text-center font-semibold text-sm text-text-secondary">
          Not satisfied? <span className="underline">Cancel at any time</span>
        </span>
      </div>
    </section>
  );
}
