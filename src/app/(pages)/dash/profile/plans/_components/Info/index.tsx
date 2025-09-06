'use client';

import { useTranslations } from 'next-intl';

import { PlanAbstract, UserAbstract } from '@domain/entities';

import { useStripe } from '@app/hooks';

interface InfoProps {
  user: UserAbstract;
}

const TITLE_BY_TYPE: Record<PlanAbstract['type'], string> = {
  free: 'free',
  starter: 'starter',
  pro: 'pro',
  enterprise: 'enterprise',
};

export default function Info({ user }: InfoProps) {
  const t = useTranslations('page.plans');
  const compT = useTranslations('component.plan');

  const { createPortal } = useStripe();

  return (
    <section className="flex flex-col items-center gap-2">
      <p className="text-center">
        {t.rich('selected', {
          plan: compT(TITLE_BY_TYPE[user.plan] as any),
          strong: (chunk) => (
            <strong className="font-semibold text-primary">{chunk}</strong>
          ),
        })}
      </p>

      <span className="text-center font-semibold text-sm text-text-secondary">
        {t.rich('cancel', {
          link: (chunk) => (
            <button className="cursor-pointer" onClick={createPortal}>
              <span className="underline">{chunk}</span>
            </button>
          ),
        })}
      </span>
    </section>
  );
}
