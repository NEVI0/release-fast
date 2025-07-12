import Link from 'next/link';
import { ArrowRight, CircleHelp } from 'lucide-react';

import { Badge, Button } from '@app/components/ui';

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-8 items-center justify-center h-[600px]">
      <div className="flex flex-col gap-2 md:w-[80%] relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Badge>🚀 Public beta!</Badge>
        </div>

        <h1 className="text-center font-bold text-4xl">
          Notify your users in a <strong className="text-primary">clear</strong>{' '}
          and <strong className="text-primary">efficient</strong> way!
        </h1>

        <h2 className="text-center font-semibold text-2xl text-text-secondary">
          Automatically generate your system's releases with A.I. and notify
          your users of every change. 😎
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
        <Link href="#how-it-works-section">
          <Button className="w-[224px]">
            How it works <Button.Icon icon={CircleHelp} />
          </Button>
        </Link>

        <Link href="/access">
          <Button variant="secondary" className="w-[224px]">
            Start for free <Button.Icon icon={ArrowRight} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
