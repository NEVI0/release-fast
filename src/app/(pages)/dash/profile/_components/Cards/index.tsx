import { Calendar, BadgeCheck, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { UserAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';
import { formatDate, formatToCurrency } from '@app/helpers';

import { Card } from '@app/components/common';

interface CardsProps {
  user: UserAbstract;
}

export default function Cards({ user }: CardsProps) {
  const t = useTranslations('page.account');

  const currentPlan =
    user.plan === 'free'
      ? t('card.one.value.free')
      : `${PLAN_DETAILS_BY_TYPE[user.plan].name}, ${formatToCurrency(
          PLAN_DETAILS_BY_TYPE[user.plan].value
        )}/m`;

  return (
    <section className="flex flex-col md:flex-row items-center gap-4">
      <Card title={t('card.one.title')} value={currentPlan} icon={BadgeCheck} />

      <Card
        title={t('card.two.title')}
        value={user.email || t('card.two.value')}
        icon={Mail}
      />

      <Card
        title={t('card.three.title')}
        value={formatDate(user.createdAt, 'MMMM DD, YYYY')}
        icon={Calendar}
      />
    </section>
  );
}
