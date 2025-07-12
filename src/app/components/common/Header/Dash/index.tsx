import Link from 'next/link';

import { FREE_TRIAL_DAYS } from '@domain/constants/plan';
import { fetchUserSession } from '@app/actions';

import { VerticalDivider } from '@app/components/ui';
import { ThemeLogo } from '@app/components/common';

import { LogoutLink, NavLink } from '../components';

export default async function DashHeader() {
  const session = await fetchUserSession();
  if (!session) return null;

  const { plan, isFreeTrial } = session.user;
  const shouldShowBanner = isFreeTrial || plan === 'free';

  return (
    <>
      {shouldShowBanner && (
        <div className="flex items-center justify-center w-full py-1 bg-primary text-white">
          <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
            {isFreeTrial ? (
              <p>
                You are currently on the{' '}
                <strong className="font-semibold">
                  free trial of {FREE_TRIAL_DAYS} days
                </strong>
              </p>
            ) : (
              <p>
                You are currently on the{' '}
                <strong className="font-semibold">free</strong> plan
              </p>
            )}

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
