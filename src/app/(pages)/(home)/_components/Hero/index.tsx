import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

import { Button } from '@app/components/ui';

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center h-[524px]">
      <div className="flex flex-col gap-2 w-[80%]">
        <h1 className="text-center font-bold text-4xl">
          Notifique seus usuários de forma{' '}
          <strong className="text-primary">clara</strong> e{' '}
          <strong className="text-primary">objetiva</strong>!
        </h1>

        <h2 className="text-center font-semibold text-2xl text-text-secondary">
          Configure notificações personalizadas no seu sistema rapidamente e em
          cada alteração seu usuário saberá de tudo. 😎
        </h2>
      </div>

      <Link href="#media-section">
        <Button variant="secondary">
          Como funciona? <ArrowDown className="size-5" />
        </Button>
      </Link>
    </section>
  );
}
