'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Home } from 'lucide-react';

import { wait } from '@app/helpers';
import { ANIMATIONS } from '@app/constants/animations';

import { Animation, Button } from '@app/components/ui';

const REDIRECT_SECONDS = 5;

export default function AccessPage() {
  const t = useTranslations('page.checkout.error');

  useEffect(() => {
    const init = async () => {
      await wait(REDIRECT_SECONDS * 1000);
      redirect('/dash/profile');
    };

    init();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <Animation
        animation={ANIMATIONS.ERROR}
        width={200}
        height={200}
        loop={false}
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl text-center font-bold">{t('title')}</h1>

        <p className="text-center text-text-secondary">
          {t('message', { seconds: REDIRECT_SECONDS })}
        </p>
      </div>

      <Link href="/dash">
        <Button>
          {t('action')} <Button.Icon icon={Home} />
        </Button>
      </Link>
    </div>
  );
}
