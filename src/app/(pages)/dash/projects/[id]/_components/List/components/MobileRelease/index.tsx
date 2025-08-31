import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ExternalLink } from 'lucide-react';

import { ReleaseAbstract } from '@domain/entities';
import { Button } from '@app/components/ui';

interface MobileReleaseProps {
  release: ReleaseAbstract;
}

export default function MobileRelease({ release }: MobileReleaseProps) {
  const t = useTranslations('page.project.list');

  return (
    <div className="flex flex-col px-8 py-6 gap-6 w-full border border-border rounded-2xl bg-container">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{release.title}</h3>
        <p className="text-text-secondary">{release.version}</p>
      </div>

      <Link
        href={`/public/release/${release.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button className="w-full">
          {t('column.five')} <Button.Icon icon={ExternalLink} />
        </Button>
      </Link>
    </div>
  );
}
