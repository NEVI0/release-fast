import Link from 'next/link';

import { ArrowRight, CircleHelp } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Badge, Button } from '@app/components/ui';

export default function Hero() {
  const t = useTranslations('page.home.hero');

  return (
    <section className="relative flex flex-col gap-8 items-center justify-center h-[600px]">
      <div className="flex flex-col gap-2 md:w-[80%] relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Badge>{t('badget')}</Badge>
        </div>

        <h1 className="text-center font-bold text-4xl">
          {t.rich('title', {
            strong: (chunk) => (
              <strong className="text-primary">{chunk}</strong>
            ),
          })}
        </h1>

        <h2 className="text-center font-semibold text-2xl text-text-secondary">
          {t('subtitle')}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
        <Link href="#how-it-works-section">
          <Button className="w-[224px]">
            {t('links.howItWorks')} <Button.Icon icon={CircleHelp} />
          </Button>
        </Link>

        <Link href="/access">
          <Button variant="secondary" className="w-[224px]">
            {t('links.access')} <Button.Icon icon={ArrowRight} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
