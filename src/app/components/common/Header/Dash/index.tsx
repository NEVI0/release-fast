import Link from 'next/link';

import { VerticalDivider } from '@app/components/ui';
import { NavLink } from '../components';
import { ThemeLogo, ThemeToggle } from '@app/components/common';

export default function DashHeader() {
  return (
    <>
      <div className="flex items-center justify-center w-full py-1 bg-primary text-white">
        <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
          <p>
            Você está atualmente dentro do plano{' '}
            <strong className="font-semibold">gratuito</strong>
          </p>

          <Link href="/dash/profile" className="font-semibold underline">
            Clique aqui para atualizar seu plano! 🚀
          </Link>
        </div>
      </div>

      <header className="flex items-center justify-center w-full h-[80px] border-b border-border bg-container dark:bg-body">
        <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8">
          <ThemeLogo href="/" />

          <nav className="flex items-center gap-4 h-full">
            <NavLink href="/dash">Início</NavLink>
            <VerticalDivider />
            <NavLink href="/dash/projects">Projetos</NavLink>
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
    </>
  );
}
