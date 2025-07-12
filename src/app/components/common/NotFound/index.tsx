import Link from 'next/link';
import { Home } from 'lucide-react';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation, Button } from '@app/components/ui';

interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = 'Oops... nothing found here 😕',
  message = "This page doesn't exist... are you sure you're accessing the right page?",
}: NotFoundProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <Animation animation={ANIMATIONS.NOT_FOUND} width={300} height={300} />

      <div className="flex flex-col items-center justify-center gap-2 mt-[-92px]">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-text-secondary">{message}</p>
      </div>

      <Link href="/">
        <Button>
          Go to Home <Button.Icon icon={Home} />
        </Button>
      </Link>
    </div>
  );
}
