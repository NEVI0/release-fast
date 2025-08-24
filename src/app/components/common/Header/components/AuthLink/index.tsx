import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { SessionAbstract } from '@domain/entities';
import LoginLink from '../LoginLink';

interface AuthLinkProps {
  session: SessionAbstract | null;
}

export default function AuthLink({ session }: AuthLinkProps) {
  const t = useTranslations('component.header.home');

  if (session) {
    return (
      <Link
        href="/dash"
        className="h-full flex items-center justify-center font-semibold underline text-primary"
      >
        {t('nav.dashboard')}
      </Link>
    );
  }

  return <LoginLink />;
}
