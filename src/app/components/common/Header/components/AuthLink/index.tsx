import Link from 'next/link';

import { fetchUserSession } from '@app/actions';
import LoginLink from '../LoginLink';

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

  return <LoginLink />;
}
