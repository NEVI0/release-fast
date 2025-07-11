import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Badge, Button } from '@app/components/ui';

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-8 items-center justify-center h-[600px]">
      <div className="flex flex-col gap-2 md:w-[80%] relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Badge>🚀 Beta publico!</Badge>
        </div>

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

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
        <Link href="#how-it-works-section">
          <Button className="w-[224px]">Como funciona</Button>
        </Link>

        <Link href="/auth/sign-up">
          <Button variant="secondary" className="w-[224px]">
            Comece de graça <Button.Icon icon={ArrowRight} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
