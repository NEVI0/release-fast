import { Calendar, BadgeCheck, Mail, MailCheck } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import { Card } from '@app/components/common';
import { Badge, Button } from '@app/components/ui';
import { formatDate } from '@app/helpers';

interface CardsProps {
  user: UserAbstract;
}

export default function Cards({ user }: CardsProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Card title="Plano atual" value="R$ 19,90/mês" icon={BadgeCheck} />
        <Card
          title="Próximo vencimento"
          value="20 de junho de 2025"
          icon={Calendar}
        />
        <Card
          title="Criado em"
          value={formatDate(user.createdAt, 'DD of MMMM of YYYY')}
          icon={Calendar}
        />
      </div>

      <Card title="E-mail da conta" value={user.email} icon={Mail}>
        {true ? (
          <Button variant="primary">
            Verificar e-mail <MailCheck className="size-5" />
          </Button>
        ) : (
          <Badge variant="success">E-mail verificado ✔</Badge>
        )}
      </Card>
    </section>
  );
}
