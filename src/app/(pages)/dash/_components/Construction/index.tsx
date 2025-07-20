import Link from 'next/link';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation } from '@app/components/ui';

export default function Construction() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex items-center justify-center mr-[-64px]">
        <Animation
          animation={ANIMATIONS.CONSTRUCTION}
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col gap-2 h-auto md:h-[152px]">
          <h2 className="text-2xl font-semibold">
            Platform under construction...
          </h2>

          <p className="text-text-secondary">
            This platform is current in{' '}
            <strong className="font-semibold">Public Beta</strong>. This means{' '}
            <strong className="font-semibold">not</strong> all the features are
            currently available. But, we are eager to give all the features we
            can provide to your users. You can give us your feedback in the link
            below so we can now what you want from Release Fast and provide it
            to you! 😃
          </p>
        </div>

        <Link href="/dash/feedback">
          <strong className="text-primary font-semibold underline">
            Give us your feedback!
          </strong>
        </Link>
      </div>
    </section>
  );
}
