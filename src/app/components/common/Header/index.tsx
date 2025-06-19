import Link from 'next/link';
import Image from 'next/image';

import { VerticalDivider } from '@app/components/ui';

export default async function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[80px] border-b border-border">
      <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
        <Link
          href="/"
          className="h-full flex items-center justify-center font-medium"
        >
          <Image
            src="/images/logo.png"
            alt="Release Fast Logo"
            width={198}
            height={36}
          />
        </Link>

        <nav className="flex items-center gap-4 h-full">
          <Link
            href="/"
            className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
          >
            Início
          </Link>

          <VerticalDivider />

          <Link
            href="/#how-it-works-section"
            className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
          >
            Como funciona
          </Link>

          <VerticalDivider />

          <Link
            href="/#about-section"
            className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
          >
            Sobre
          </Link>

          <VerticalDivider />

          <Link
            href="/#plans-section"
            className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
          >
            Planos
          </Link>

          <VerticalDivider />

          <Link
            href="/auth"
            className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
          >
            Login
          </Link>

          <VerticalDivider />

          <Link
            href="/auth/sign-up"
            className="h-full flex items-center justify-center font-semibold underline text-primary"
          >
            Criar minha conta
          </Link>
        </nav>
      </div>
    </header>
  );
}
