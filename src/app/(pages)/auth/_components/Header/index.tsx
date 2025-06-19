import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  subtitle: string;
}

export default function Header({ children, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-2">
      <h1 className="font-bold text-4xl">{children}</h1>

      <h2 className="font-semibold text-2xl text-text-secondary">{subtitle}</h2>
    </header>
  );
}
