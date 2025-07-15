'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

import Link from 'next/link';
import { Home } from 'lucide-react';

import { wait } from '@app/helpers';
import { ANIMATIONS } from '@app/constants/animations';

import { Animation, Button } from '@app/components/ui';

const REDIRECT_SECONDS = 5;

export default function AccessPage() {
  useEffect(() => {
    const init = async () => {
      await wait(REDIRECT_SECONDS * 1000);
      redirect('/dash');
    };

    init();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <div className=" mt-[-100px]">
        <Animation
          animation={ANIMATIONS.SUCCESS}
          width={400}
          height={400}
          loop={false}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-[-100px]">
        <h1 className="text-2xl text-center font-bold">
          Plan subscribed successfully!
        </h1>

        <p className="text-center text-text-secondary">
          You will be redirected to the dashboard in {REDIRECT_SECONDS}{' '}
          seconds...
        </p>
      </div>

      <Link href="/dash">
        <Button>
          Dashboard <Button.Icon icon={Home} />
        </Button>
      </Link>
    </div>
  );
}
