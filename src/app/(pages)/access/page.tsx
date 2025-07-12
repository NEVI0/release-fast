'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { Home } from 'lucide-react';

import { wait } from '@app/helpers';
import { ANIMATIONS } from '@app/constants/animations';

import { Animation, Button } from '@app/components/ui';
import { accessAccountAction } from '@app/actions';

const REDIRECT_SECONDS = 5;

export default function AccessPage() {
  useEffect(() => {
    const init = async () => {
      await wait(REDIRECT_SECONDS * 1000);
      await accessAccountAction('github');
    };

    init();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <Animation animation={ANIMATIONS.GITHUB} width={244} height={244} />

      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl text-center font-bold">
          You will be redirected to GitHub login in {REDIRECT_SECONDS}{' '}
          seconds...
        </h1>

        <p className="text-center text-text-secondary">
          <strong>Release Fast</strong> uses the <strong>GitHub</strong>{' '}
          provider for authentication and (read-only) access to the repositories
          of your linked account. By linking your GitHub account with Release
          Fast, you <strong>pay nothing</strong> and get free access to Release
          Fast for <strong>7 days</strong> to use as you wish.
        </p>
      </div>

      <Link href="/">
        <Button>
          Cancel and return <Button.Icon icon={Home} />
        </Button>
      </Link>
    </div>
  );
}
