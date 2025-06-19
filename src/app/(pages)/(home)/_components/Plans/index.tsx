import Link from 'next/link';

import { Plan } from './components';

export default function Plans() {
  return (
    <section className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold">Preços simples e transparentes</h2>
        <h3 className="text-xl font-semibold text-text-secondary ">
          Escolha o plano perfeito para o tamanho e as necessidades da sua
          equipe
        </h3>
      </div>

      <div className="flex items-center justify-center gap-8">
        <Plan
          title="Starter"
          price="R$ 19,90"
          features={[
            'Até 3 projetos',
            'Geração de release notes com I.A',
            'Notificações por basicas',
          ]}
        />

        <Plan
          title="Professional"
          price="R$ 49,90"
          features={[
            'Até 15 projetos',
            'Geração de release notes com I.A',
            'Sugestões avançadas com I.A',
            'Notificações por basicas',
            'Suporte priorizado',
          ]}
          variant="main"
        />

        <Plan
          title="Starter"
          price="R$ 20,00"
          features={['Até 3 projetos', 'Até 3 projetos', 'Até 3 projetos']}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="">
          Comece agora a usar o release fast, em qualquer um dos planos acima
          você tem{' '}
          <strong className="font-semibold text-primary">
            7 dias de teste grátis
          </strong>
          .
        </p>

        <span className="text-center font-semibold text-sm text-text-secondary">
          Não gostou?{' '}
          <Link href="/" className="underline">
            Cancele a qualquer momento
          </Link>
        </span>
      </div>
    </section>
  );
}
