import { Calendar, BadgeCheck, Mail, MailCheck } from 'lucide-react';

import { UserAbstract } from '@domain/entities';
import { formatDate } from '@app/helpers';

import { Card } from '@app/components/common';
import { Badge, Button } from '@app/components/ui';

interface CardsProps {
  user: UserAbstract;
}

export default function Cards({ user }: CardsProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Card title="Current plan" value="R$ 19.90/month" icon={BadgeCheck} />
        <Card title="Next due date" value="June 20, 2025" icon={Calendar} />
        <Card
          title="Created at"
          value={formatDate(user.createdAt, 'MMMM DD, YYYY')}
          icon={Calendar}
        />
      </div>

      <Card title="Account email" value={user.email} icon={Mail}>
        {true ? (
          <Button variant="primary">
            Verify email <Button.Icon icon={MailCheck} />
          </Button>
        ) : (
          <Badge variant="success">Email verified</Badge>
        )}
      </Card>
    </section>
  );
}
