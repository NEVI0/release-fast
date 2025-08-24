'use client';

import { useTranslations } from 'next-intl';

import { UserAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';

import { useStripe } from '@app/hooks';

interface InfoProps {
  user: UserAbstract;
}

export default function Info({ user }: InfoProps) {
  const t = useTranslations('page.plans');
  const { createPortal } = useStripe();

  return (
    <section className="flex flex-col items-center gap-2">
      <p className="text-center">
        {t.rich('selected', {
          plan: PLAN_DETAILS_BY_TYPE[user.plan].name,
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
