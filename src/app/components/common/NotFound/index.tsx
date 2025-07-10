import Link from 'next/link';
import { Home } from 'lucide-react';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation, Button } from '@app/components/ui';

interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = 'Ops... nada encontrado aqui 😕',
  message = 'Está página não existe... tem certeza que está acessando a página certa?',
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
          Ir para o ínicio <Home className="size-5" />
        </Button>
      </Link>
    </div>
  );
}
