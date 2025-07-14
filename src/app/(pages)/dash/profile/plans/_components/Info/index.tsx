'use client';

import { UserAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';

import { useStripe } from '@app/hooks';

interface InfoProps {
  user: UserAbstract;
}

export default function Info({ user }: InfoProps) {
  const { createPortal } = useStripe();

  return (
    <section className="flex flex-col items-center gap-2">
      <p className="text-center">
        Your current plan is the{' '}
        <strong className="font-semibold text-primary">
          {PLAN_DETAILS_BY_TYPE[user.plan].name}{' '}
        </strong>
        plan. Select upgrade to one of the above plan and enjoy more!!
      </p>

      <span className="text-center font-semibold text-sm text-text-secondary">
        Not satisfied?{' '}
        <button className="cursor-pointer" onClick={createPortal}>
          <span className="underline">Cancel at any time</span>
        </button>
      </span>
    </section>
  );
}
