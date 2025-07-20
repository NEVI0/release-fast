import { Calendar, BadgeCheck, Mail, MailCheck, Plus } from 'lucide-react';

import { UserAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';
import { formatDate, formatToCurrency } from '@app/helpers';

import { Card } from '@app/components/common';
import { Badge, Button } from '@app/components/ui';

interface CardsProps {
  user: UserAbstract;
}

export default function Cards({ user }: CardsProps) {
  const currentPlan =
    user.plan === 'free'
      ? 'Free'
      : `${PLAN_DETAILS_BY_TYPE[user.plan].name}, ${formatToCurrency(
          PLAN_DETAILS_BY_TYPE[user.plan].value
        )}/m`;

  return (
    <section className="flex flex-col md:flex-row items-center gap-4">
      <Card title="Current plan" value={currentPlan} icon={BadgeCheck} />

      <Card
        title="Account e-mail"
        value={user.email || 'E-mail not provided'}
        icon={Mail}
      />

      <Card
        title="Created at"
        value={formatDate(user.createdAt, 'MMMM DD, YYYY')}
        icon={Calendar}
      />
    </section>
  );
}
