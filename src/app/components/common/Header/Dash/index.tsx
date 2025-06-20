import Link from 'next/link';
import Image from 'next/image';

import { VerticalDivider } from '@app/components/ui';
import { NavLink } from '../components';

export default function DashHeader() {
  return (
    <header className="flex items-center justify-center w-full h-[80px] border-b border-border">
      <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
        <Link href="/" className="h-full flex items-center font-medium">
          <Image
            src="/images/logo.png"
            alt="Release Fast Logo"
            width={198}
            height={36}
          />
        </Link>

        <nav className="flex items-center gap-4 h-full">
          <NavLink href="/dash">Início</NavLink>
          <VerticalDivider />
          <NavLink href="/dash/projects">Projetos</NavLink>
          <VerticalDivider />
          <NavLink href="/dash/settings">Configurações</NavLink>
          <VerticalDivider />
          <NavLink href="/auth/logout">Sair</NavLink>
          <VerticalDivider />

          <Link
            href="/dash/profile"
            className="h-full flex items-center justify-center font-semibold underline text-primary"
          >
            Minha conta
          </Link>
        </nav>
      </div>
    </header>
  );
}
