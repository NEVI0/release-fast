import Link from 'next/link';

import { fetchUserSession } from '@app/actions';

import { VerticalDivider } from '@app/components/ui';
import { NavLink } from '..';

export default async function AuthLink() {
  const session = await fetchUserSession();

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

  return (
    <>
      <NavLink href="/auth">Login</NavLink>

      <VerticalDivider />

      <Link
        href="/auth/sign-up"
        className="h-full flex items-center justify-center font-semibold underline text-primary"
      >
        Criar minha conta
      </Link>
    </>
  );
}
