import Link from 'next/link';
import Image from 'next/image';

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
            className="h-full flex items-center justify-center font-semibold underline text-primary"
          >
            Quero saber sobre este produto!
          </Link>
        </nav>
      </div>
    </header>
  );
}
