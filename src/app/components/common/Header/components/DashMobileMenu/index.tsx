'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Menu, X } from 'lucide-react';

import { concatClasses } from '@app/helpers';
import { IconButton } from '@app/components/ui';

import LogoutLink from '../LogoutLink';
import NavLink from '../NavLink';

export default function DashMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="md:hidden">
        <IconButton type="button" icon={Menu} onClick={handleToggleMenu} />
      </div>

      <aside
        className={concatClasses(
          'fixed top-0 right-0 w-64 h-full bg-container transition-transform transform border-l border-border z-30',
          isMenuOpen ? 'translate-x-0' : 'translate-x-64'
        )}
      >
        <div className="flex items-center justify-between w-full h-[80px] border-b border-border px-8">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <IconButton icon={X} onClick={handleToggleMenu} />
        </div>

        <nav className="flex flex-col items-start gap-8 p-8">
          <NavLink href="/dash" onClick={handleToggleMenu}>
            Dashboard
          </NavLink>

          <NavLink href="/dash/projects" onClick={handleToggleMenu}>
            Projects
          </NavLink>

          <LogoutLink />

          <Link
            href="/dash/profile"
            className="h-full flex items-center justify-center font-semibold underline text-primary"
            onClick={handleToggleMenu}
          >
            My account
          </Link>
        </nav>
      </aside>
    </>
  );
}
