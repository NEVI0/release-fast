import Link from 'next/link';
import { PlayCircle, Code2, Github, Smile, BrainCircuit } from 'lucide-react';

import { Flow } from './components';

export default function HowItWorks() {
  return (
    <>
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-center text-2xl font-bold">
          Click no vídeo abaixo para ter uma pequena amostra
        </h2>

        <div className="w-full h-[224px] md:w-[832px] md:h-[432px] bg-text-primary rounded-3xl flex items-center justify-center">
          <PlayCircle className="text-white size-8" />
        </div>

        <p className="text-text-secondary text-center w-[90%]">
          Nosso serviço permite que você gerencie versões do seu software e
          comunique as alterações aos seus usuários automaticamente com{' '}
          <strong>I.A</strong>. Conecte seu repositório <strong>GitHub</strong>{' '}
          ou <strong>GitLab</strong>, selecione duas versões, e nossa I.A gera
          um changelog claro e amigável. Publique com um clique via widget,
          e-mail ou página pública personalizada para o seu usuário final!
        </p>
      </section>

      <section className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-center gap-2">
        <Flow
          icon={<Code2 className="text-primary size-7" />}
          text="Codifique uma alteração no seu software"
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<Github className="text-primary size-7" />}
          text="Atualize o repositório do seu software"
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<BrainCircuit className="text-primary size-7" />}
          text="Gere um release note com a I.A"
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<Smile className="text-primary size-7" />}
          text="Seu usuário final recebe uma notificação da sua alteração"
        />
      </section>

      <section className="flex items-center justify-center">
        <Link
          href="/#about-section"
          className="font-semibold underline text-primary"
        >
          Gostou? Continue lendo um pouco mais...
        </Link>
      </section>
    </>
  );
}
