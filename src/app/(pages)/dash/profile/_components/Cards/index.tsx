import { Calendar, BadgeCheck, Mail } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { PlanAbstract, UserAbstract } from '@domain/entities';

import { formatDate } from '@app/helpers';
import { Card } from '@app/components/common';

interface CardsProps {
  user: UserAbstract;
}

const PLAN_NAME_BY_TYPE: Record<PlanAbstract['type'], string> = {
  free: 'free',
  starter: 'starter',
  pro: 'pro',
  enterprise: 'enterprise',
};

export default function Cards({ user }: CardsProps) {
  const t = useTranslations('page.account');
  const compT = useTranslations('component.plan');
  const locale = useLocale();

  return (
    <section className="flex flex-col md:flex-row items-center gap-4">
      <Card
        title={t('card.one.title')}
        value={compT(PLAN_NAME_BY_TYPE[user.plan] as any)}
        icon={BadgeCheck}
      />

      <Card
        title={t('card.two.title')}
        value={user.email || t('card.two.value')}
        icon={Mail}
      />

      <Card
        title={t('card.three.title')}
        value={formatDate(user.createdAt, locale)}
        icon={Calendar}
      />
    </section>
  );
}
