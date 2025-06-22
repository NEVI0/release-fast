import { Calendar, BadgeCheck, Mail, MailCheck } from 'lucide-react';

import { Card } from '@app/components/common';
import { Badge, Button } from '@app/components/ui';

export default function Cards() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Card title="Plano atual" value="R$ 19,90/mês" icon={BadgeCheck} />
        <Card
          title="Próximo vencimento"
          value="20 de junho de 2025"
          icon={Calendar}
        />
        <Card title="Criado em" value="20 de junho de 2025" icon={Calendar} />
      </div>

      <Card title="E-mail da conta" value="nevio@releasefast.com" icon={Mail}>
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
