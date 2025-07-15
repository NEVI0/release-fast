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
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Card title="Current plan" value={currentPlan} icon={BadgeCheck} />

        <Card title="Next due date" value="June 20, 2025" icon={Calendar} />

        <Card
          title="Created at"
          value={formatDate(user.createdAt, 'MMMM DD, YYYY')}
          icon={Calendar}
        />
      </div>

      <Card
        title="Account e-mail"
        value={user.email || 'E-mail not provided'}
        icon={Mail}
      >
        {!user.email ? (
          <Button variant="primary">
            Provide e-mail <Button.Icon icon={Plus} />
          </Button>
        ) : !user.emailVerified ? (
          <Button variant="primary">
            Verify e-mail <Button.Icon icon={MailCheck} />
          </Button>
        ) : (
          <Badge variant="success">E-mail verified</Badge>
        )}
      </Card>
    </section>
  );
}
