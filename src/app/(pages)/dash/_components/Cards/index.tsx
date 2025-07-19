import { Boxes, BrainCircuit, Cable } from 'lucide-react';

import { Card } from '@app/components/common';

export default function Cards() {
  return (
    <section className="flex items-center justify-between gap-4">
      <Card title="Projects created" value="3" icon={Boxes} />
      <Card title="Releases generated" value="100" icon={BrainCircuit} />
      <Card title="Account provider" value="GitHub" icon={Cable} />
    </section>
  );
}
