'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { SessionAbstract } from '@domain/entities';

import { concatClasses } from '@app/helpers';
import { IconButton } from '@app/components/ui';

import AuthLink from '../AuthLink';
import NavLink from '../NavLink';

interface MobileMenuProps {
  session: SessionAbstract | null;
}

export default function MobileMenu({ session }: MobileMenuProps) {
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
          <NavLink href="/" onClick={handleToggleMenu}>
            Home
          </NavLink>

          <NavLink href="/#how-it-works-section" onClick={handleToggleMenu}>
            How it works
          </NavLink>

          <NavLink href="/#about-section" onClick={handleToggleMenu}>
            About
          </NavLink>

          <NavLink href="/#plans-section" onClick={handleToggleMenu}>
            Plans
          </NavLink>

          <AuthLink session={session} />
        </nav>
      </aside>
    </>
  );
}
