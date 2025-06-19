import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@app/components/ui';

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-8 items-center justify-center h-[600px]">
      <div className="flex flex-col gap-2 w-[80%] relative z-10">
        <h1 className="text-center font-bold text-4xl">
          Notifique seus usuários de forma{' '}
          <strong className="text-primary">clara</strong> e{' '}
          <strong className="text-primary">eficiente</strong>!
        </h1>

        <h2 className="text-center font-semibold text-2xl text-text-secondary">
          Gere releases de seu sistema automaticamente com I.A e notifique seus
          usuários de cada alteração. 😎
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 relative z-10">
        <Link href="#how-it-works-section">
          <Button>Como funciona</Button>
        </Link>

        <Link href="/auth/sign-up">
          <Button variant="secondary">
            Comece de graça <ArrowRight className="size-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
