import Image from 'next/image';
import Link from 'next/link';

import { Box, Home, LogOut, Settings } from 'lucide-react';

import { NavLink } from './components';

const MENU_ITEMS = [
  {
    label: 'Dashboard',
    href: '/dash',
    icon: Home,
  },
  {
    label: 'Projetos',
    href: '/dash/projects',
    icon: Box,
  },
  {
    label: 'Configurações',
    href: '/dash/settings',
    icon: Settings,
  },
];

export default function DashSidebar() {
  return (
    <aside className="h-full w-[364px] border-r border-border bg-container flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-8 flex-1">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Release Fast Logo"
            width={198}
            height={36}
          />
        </Link>

        <nav className="flex flex-col gap-4">
          <h3 className="text-text-secondary text-sm">Menu principal</h3>

          <ul className="flex flex-col gap-2">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href} label={item.label} icon={item.icon} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav className="flex flex-col gap-4">
        <h3 className="text-text-secondary text-sm">Mais opções</h3>

        <ul className="flex flex-col gap-2">
          <li>
            <NavLink href="/" label="Sair" icon={LogOut} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
