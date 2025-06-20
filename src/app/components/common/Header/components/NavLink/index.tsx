import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
    >
      {children}
    </Link>
  );
}
