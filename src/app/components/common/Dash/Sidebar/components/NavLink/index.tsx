import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

export default function NavLink({ href, label, icon: Icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-2 h-[44px] rounded-xl focus:bg-border/50 hover:bg-border/50 transition-colors"
    >
      <Icon className="size-5" />
      {label}
    </Link>
  );
}
