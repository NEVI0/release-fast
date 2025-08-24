import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LoginLink() {
  const t = useTranslations('component.header.home');

  return (
    <Link
      href="/access"
      className="cursor-pointer h-full flex items-center justify-center font-semibold underline text-primary"
    >
      {t('nav.access')}
    </Link>
  );
}
