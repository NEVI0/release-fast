'use client';
import { useTranslations } from 'next-intl';

import { logoutAccountAction } from '@app/actions';

export default function LogoutLink() {
  const t = useTranslations('component.header.dash');

  return (
    <button
      onClick={logoutAccountAction}
      className="cursor-pointer h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
    >
      {t('nav.logout')}
    </button>
  );
}
