import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Info } from './components';

export default function Research() {
  return (
    <section id="research" className="flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold">Mas por que dessa solução?? 🧐</h2>

      <div className="flex items-start justify-center gap-8">
        <Info variant="secondary" value="53%">
          <p className="w-full text-center">
            Dos usuários de sistemas informaram que uma comunicação de qualidade
            referente a alterações no software é muito importante.
          </p>
        </Info>

        <Info value="72%">
          <p className="w-full text-center">
            Dos usuários de sistemas se sentem frustrados quando não sabem de
            alterações no sistema.
          </p>
        </Info>

        <Info variant="secondary" value="64%">
          <p className="w-full text-center">
            Dos usuários de sistemas informaram que já sentiram sua
            produtividade afetada por alterações não comunicadas devidamente.
          </p>
        </Info>
      </div>

      <Link
        href="/"
        className="flex items-center justify-center gap-4 font-semibold underline text-primary"
      >
        Confira a pesquisa realizada por completo.{' '}
        <ExternalLink className="size-4" />
      </Link>
    </section>
  );
}
