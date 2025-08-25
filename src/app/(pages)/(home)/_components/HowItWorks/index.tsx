import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Code2, Github, Smile, BrainCircuit } from 'lucide-react';

import { Video } from '@app/components/common';
import { Flow } from './components';

export default function HowItWorks() {
  const t = useTranslations('page.home.howItWorks');

  return (
    <>
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-center text-2xl font-bold">{t('title')}</h2>

        <Video />

        <p className="text-text-secondary text-center w-[90%]">
          {t.rich('description', {
            strong: (chunk) => (
              <strong className="font-semibold">{chunk}</strong>
            ),
          })}
        </p>
      </section>

      <section className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-center gap-2">
        <Flow
          icon={<Code2 className="text-primary size-7" />}
          text={t('flow.step1')}
          index={1}
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<Github className="text-primary size-7" />}
          text={t('flow.step2')}
          index={2}
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<BrainCircuit className="text-primary size-7" />}
          text={t('flow.step3')}
          index={3}
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<Smile className="text-primary size-7" />}
          text={t('flow.step4')}
          index={4}
        />
      </section>

      <section className="flex items-center justify-center">
        <Link
          href="/#about-section"
          className="font-semibold underline text-primary"
        >
          {t('link')}
        </Link>
      </section>
    </>
  );
}
