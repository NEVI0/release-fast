import { Bell, Boxes, BrainCircuit } from 'lucide-react';

import { Card } from '@app/components/ui';

export default function Cards() {
  return (
    <section className="flex items-center justify-between gap-4">
      <Card title="Projetos ativos" value="3" icon={Boxes} />
      <Card title="Notificações enviadas" value="223" icon={Bell} />
      <Card title="Releases geradas" value="100" icon={BrainCircuit} />
    </section>
  );
}
