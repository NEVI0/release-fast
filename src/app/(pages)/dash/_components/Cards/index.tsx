import { Boxes, BrainCircuit, Cable } from 'lucide-react';

import { SessionProvider, UserAbstract } from '@domain/entities';

import { Card } from '@app/components/common';
import { fetchDashboardKPIsAction } from '@app/actions';

interface CardsProps {
  user: UserAbstract & { provider: SessionProvider };
}

const PROVIDER_NAME: Record<SessionProvider, string> = {
  github: 'GitHub',
  gitlab: 'GitLab',
};

export default async function Cards({ user }: CardsProps) {
  const results = await fetchDashboardKPIsAction({ userId: user.id });

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

      <Card
        title="Account provider"
        value={PROVIDER_NAME[user.provider]}
        icon={Cable}
      />
    </section>
  );
}
