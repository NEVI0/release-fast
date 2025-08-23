import Link from 'next/link';

import { ProviderCard } from './_components';

export default function AccessPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-16">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl text-center">
          <strong className="text-primary">Sign in</strong> to Release Fast
        </h1>

        <p className="text-center text-text-secondary">
          Release Fast uses the <strong>GitHub</strong> and{' '}
          <strong>GitLab</strong> providers for authentication and (read-only)
          access to the repositories of your linked account. By linking your
          account, you <strong>pay nothing</strong> and get free access to{' '}
          <strong>7 days</strong> to use as you wish. Select a provider to
          continue.
        </p>
      </section>

      <section className="flex  justify-center gap-4">
        <ProviderCard provider="github" />
        <ProviderCard provider="gitlab" />
      </section>

      <Link
        href="/"
        className="text-center font-semibold text-sm text-text-secondary underline"
      >
        Click here to return home
      </Link>
    </div>
  );
}
