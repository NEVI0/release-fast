import { Boxes, BrainCircuit, Cable } from 'lucide-react';

import { Card } from '@app/components/common';
import { fetchDashboardKPIsAction, fetchUserSession } from '@app/actions';

export default async function Cards() {
  const session = await fetchUserSession();
  if (!session || !session.user) return;

  const results = await fetchDashboardKPIsAction({ userId: session.user.id });

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Card
        title="Projects created"
        value={String(results.projects)}
        icon={Boxes}
      />

      <Card
        title="Releases generated"
        value={String(results.releases)}
        icon={BrainCircuit}
      />

      <Card title="Account provider" value="GitHub" icon={Cable} />
    </section>
  );
}
