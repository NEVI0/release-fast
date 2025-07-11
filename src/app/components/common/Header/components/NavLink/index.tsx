import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?(): void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
