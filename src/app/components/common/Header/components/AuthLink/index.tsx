import Link from 'next/link';

import { SessionAbstract } from '@domain/entities';
import LoginLink from '../LoginLink';

interface AuthLinkProps {
  session: SessionAbstract | null;
}

export default function AuthLink({ session }: AuthLinkProps) {
  if (session) {
    return (
      <Link
        href="/dash"
        className="h-full flex items-center justify-center font-semibold underline text-primary"
      >
        Dashboard
      </Link>
    );
  }

  return <LoginLink />;
}
