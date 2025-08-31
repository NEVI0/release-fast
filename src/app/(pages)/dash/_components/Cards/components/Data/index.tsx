import { useTranslations } from 'next-intl';
import { Boxes, BrainCircuit, Cable } from 'lucide-react';

import { SessionProvider } from '@domain/entities';
import { Card } from '@app/components/common';

interface DataProps {
  provider: SessionProvider;
  results: {
    projects: number;
    releases: number;
  };
}

const PROVIDER_NAME: Record<SessionProvider, string> = {
  github: 'GitHub',
  gitlab: 'GitLab',
};

export default function Data({ provider, results }: DataProps) {
  const t = useTranslations('page.dash');

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Card
        title={t('card.one.title')}
        value={String(results.projects)}
        icon={Boxes}
      />

      <Card
        title={t('card.two.title')}
        value={String(results.releases)}
        icon={BrainCircuit}
      />

      <Card
        title={t('card.three.title')}
        value={PROVIDER_NAME[provider]}
        icon={Cable}
      />
    </section>
  );
}
