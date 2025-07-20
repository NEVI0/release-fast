import Link from 'next/link';

import { fetchUserSession } from '@app/actions';

import { VerticalDivider } from '@app/components/ui';
import { ThemeLogo } from '@app/components/common';

import { FreeTrial, LogoutLink, NavLink, DashMobileMenu } from '../components';

export default async function DashHeader() {
  const session = await fetchUserSession();

  return (
    <>
      <FreeTrial session={session} />

      <header className="flex items-center justify-center w-full h-[80px] border-b border-border bg-container dark:bg-body">
        <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8">
          <ThemeLogo href="/" />

          <nav className="hidden md:flex items-center gap-4 h-full">
            <NavLink href="/dash">Dashboard</NavLink>
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

          <DashMobileMenu />
        </div>
      </header>
    </>
  );
}
