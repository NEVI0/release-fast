import { useTranslations } from 'next-intl';
import { Warning } from '@app/components/common';

export default function EndedTrial() {
  const t = useTranslations('page.dash');
  return <Warning message={t('warning')} />;
}
