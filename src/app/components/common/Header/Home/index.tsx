import Image from 'next/image';
import Link from 'next/link';

import { VerticalDivider } from '@app/components/ui';
import { NavLink } from '../components';

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-center w-full h-[80px] border-b border-border bg-container">
      <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
        <Link href="/" className="h-full flex items-center justify-center">
          <Image
            src="/images/logo-dark.png"
            alt="Release Fast Logo"
            width={198}
            height={36}
          />
        </Link>

        <nav className="flex items-center gap-4 h-full">
          <NavLink href="/">Início</NavLink>
          <VerticalDivider />
          <NavLink href="/#how-it-works-section">Como funciona</NavLink>
          <VerticalDivider />
          <NavLink href="/#about-section">Sobre</NavLink>
          <VerticalDivider />
          <NavLink href="/#plans-section">Planos</NavLink>
          <VerticalDivider />

          {true ? (
            <Link
              href="/dash"
              className="h-full flex items-center justify-center font-semibold underline text-primary"
            >
              Dashboard
            </Link>
          ) : (
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
          )}
        </nav>
      </div>
    </header>
  );
}
