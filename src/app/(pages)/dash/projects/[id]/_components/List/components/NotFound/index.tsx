import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Plus } from 'lucide-react';

import { ErrorStatus } from '@app/components/common';
import { Button } from '@app/components/ui';

interface NotFoundProps {
  id: string;
}

export default function NotFound({ id }: NotFoundProps) {
  const t = useTranslations('page.project');

  return (
    <ErrorStatus
      title={t('notFound.title')}
      message={t('notFound.description')}
    >
      <Link href={`/dash/projects/${id}/create-release`}>
        <Button variant="primary">
          {t('action.create')}
          <Button.Icon icon={Plus} />
        </Button>
      </Link>
    </ErrorStatus>
  );
}
