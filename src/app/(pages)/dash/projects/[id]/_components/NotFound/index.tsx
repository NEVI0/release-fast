import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ErrorStatus } from '@app/components/common';
import { Button } from '@app/components/ui';

export default function NotFound() {
  const t = useTranslations('page.project');

  return (
    <ErrorStatus
      title={t('notFound.title')}
      message={t('notFound.description')}
    >
      <Link href="/dash/projects/create">
        <Button variant="primary">
          {t('action.create')}
          <Button.Icon icon={Plus} />
        </Button>
      </Link>
    </ErrorStatus>
  );
}
