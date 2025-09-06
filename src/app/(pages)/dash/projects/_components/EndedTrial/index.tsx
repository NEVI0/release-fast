import { useTranslations } from 'next-intl';
import { Warning } from '@app/components/common';

export default function EndedTrial() {
  const t = useTranslations('page.projects');
  return <Warning message={t('warning')} />;
}
