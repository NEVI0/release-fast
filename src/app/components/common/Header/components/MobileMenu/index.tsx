'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { concatClasses } from '@app/helpers';
import { IconButton } from '@app/components/ui';

import NavLink from '../NavLink';

export default function MobileMenu() {
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
            Início
          </NavLink>

          <NavLink href="/#how-it-works-section" onClick={handleToggleMenu}>
            Como funciona
          </NavLink>

          <NavLink href="/#about-section" onClick={handleToggleMenu}>
            Sobre
          </NavLink>

          <NavLink href="/#plans-section" onClick={handleToggleMenu}>
            Planos
          </NavLink>
          {/* <AuthLink /> */}
        </nav>
      </aside>
    </>
  );
}
