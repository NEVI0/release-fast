import Link from 'next/link';
import { Home } from 'lucide-react';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation, Button } from '@app/components/ui';

export default function NotFount() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <Animation animation={ANIMATIONS.NOT_FOUND} width={300} height={300} />

      <div className="flex flex-col items-center justify-center gap-2 mt-[-92px]">
        <h1 className="font-bold text-2xl ">Ops... nada encontrado aqui 😕</h1>
        <p>Tem certeza que está acessando a página certa?</p>
      </div>

      <Link href="/">
        <Button>
          Ir para o ínicio <Home className="size-5" />
        </Button>
      </Link>
    </div>
  );
}
