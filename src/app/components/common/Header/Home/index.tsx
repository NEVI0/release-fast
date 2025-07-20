import Image from 'next/image';
import Link from 'next/link';

import { LOGO_DIMENSIONS } from '@app/constants/logo-dimensions';
import { VerticalDivider } from '@app/components/ui';

import { AuthLink, HomeMobileMenu, NavLink } from '../components';
import { fetchUserSession } from '@app/actions';

export default async function HomeHeader() {
  const session = await fetchUserSession();

  return (
    <header className="flex items-center justify-center w-full h-[80px] border-b border-border bg-container">
      <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
        <Link href="/" className="h-full flex items-center justify-center">
          <Image
            src="/images/logo-dark.png"
            alt="Release Fast Logo"
            width={LOGO_DIMENSIONS['normal'].width}
            height={LOGO_DIMENSIONS['normal'].height}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 h-full">
          <NavLink href="/">Home</NavLink>
          <VerticalDivider />
          <NavLink href="/#how-it-works-section">How it works</NavLink>
          <VerticalDivider />
          <NavLink href="/#about-section">About</NavLink>
          <VerticalDivider />
          <NavLink href="/#plans-section">Plans</NavLink>
          <VerticalDivider />
          <AuthLink session={session} />
        </nav>

        <HomeMobileMenu session={session} />
      </div>
    </header>
  );
}
