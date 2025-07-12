import { Bell, Boxes, BrainCircuit } from 'lucide-react';

import { Card } from '@app/components/common';

export default function Cards() {
  return (
    <section className="flex items-center justify-between gap-4">
      <Card title="Active projects" value="3" icon={Boxes} />
      <Card title="Notifications sent" value="223" icon={Bell} />
      <Card title="Releases generated" value="100" icon={BrainCircuit} />
    </section>
  );
}
