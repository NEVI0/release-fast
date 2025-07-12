import Link from 'next/link';

import { fetchUserSession } from '@app/actions';

import { VerticalDivider } from '@app/components/ui';
import { ThemeLogo } from '@app/components/common';

import { LogoutLink, NavLink } from '../components';

export default async function DashHeader() {
  const session = await fetchUserSession();
  if (!session) return null;

  return (
    <>
      {session.user.isFreeTrial && (
        <div className="flex items-center justify-center w-full py-1 bg-primary text-white">
          <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
            <p>
              You are currently on the{' '}
              <strong className="font-semibold">free</strong> plan
            </p>

            <Link
              href="/dash/profile#plans-and-subscriptions"
              className="font-semibold underline"
            >
              Click here to upgrade your plan! 🚀
            </Link>
          </div>
        </div>
      )}

      <header className="flex items-center justify-center w-full h-[80px] border-b border-border bg-container dark:bg-body">
        <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8">
          <ThemeLogo href="/" />

          <nav className="flex items-center gap-4 h-full">
            <NavLink href="/dash">Home</NavLink>
            <VerticalDivider />
            <NavLink href="/dash/projects">Projects</NavLink>
            <VerticalDivider />
            <LogoutLink />
            <VerticalDivider />

            <Link
              href="/dash/profile"
              className="h-full flex items-center justify-center font-semibold underline text-primary"
            >
              My account
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
