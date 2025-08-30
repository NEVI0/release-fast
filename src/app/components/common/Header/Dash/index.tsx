import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { VerticalDivider } from '@app/components/ui';
import { ThemeLogo } from '@app/components/common';

import {
  FreeTrial,
  LogoutLink,
  NavLink,
  DashMobileMenu,
  LanguageSwitcher,
} from '../components';

export default function DashHeader() {
  const t = useTranslations('component.header.dash');

  return (
    <>
      <FreeTrial />

      <header className="flex items-center justify-center w-full h-[80px] border-b border-border bg-container dark:bg-body">
        <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8">
          <ThemeLogo href="/" />

          <nav className="hidden md:flex items-center gap-4 h-full">
            <NavLink href="/dash">{t('nav.dashboard')}</NavLink>
            <VerticalDivider />
            <NavLink href="/dash/projects">{t('nav.projects')}</NavLink>
            <VerticalDivider />
            <LogoutLink />
          </nav>

          <div className="hidden md:flex items-center gap-4 h-full">
            <Link
              href="/dash/profile"
              className="h-full flex items-center justify-center font-semibold underline text-primary"
            >
              {t('nav.account')}
            </Link>

            <VerticalDivider />
            <LanguageSwitcher />
          </div>

          <DashMobileMenu />
        </div>
      </header>
    </>
  );
}
