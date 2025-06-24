import Link from 'next/link';

import { makeFetchPlansUseCase } from '@factories/useCases';

import { Plan } from './components';
import { PlanType } from '@domain/entities';

const PLAN_NAME_BY_TYPE: Record<PlanType, string> = {
  starter: 'Iniciante',
  pro: 'Profissional',
  enterprise: 'Empresarial',
};

export default function Plans() {
  const plans = makeFetchPlansUseCase().execute();

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
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            title={PLAN_NAME_BY_TYPE[plan.type]}
            price={plan.price}
            features={plan.features}
            variant={plan.type === 'pro' ? 'main' : 'normal'}
          />
        ))}
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
