import { useTranslations } from 'next-intl';

import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';
import makeFetchPlansUseCase from '@factories/useCases/makeFetchPlansUseCase';

import { Plan } from './components';

export default function Plans() {
  const t = useTranslations('page.home.plans');
  const plans = makeFetchPlansUseCase().execute();

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center text-2xl font-bold">{t('title')}</h2>

        <h3 className="text-center text-xl font-semibold text-text-secondary ">
          {t('subtitle')}
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            title={PLAN_DETAILS_BY_TYPE[plan.type].name}
            price={plan.price}
            features={plan.features}
            variant={plan.type === 'pro' ? 'main' : 'normal'}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-center w-full md:w-[80%]">
          {t.rich('description', {
            strong: (chunk) => (
              <strong className="font-semibold text-primary">{chunk}</strong>
            ),
          })}
        </p>

        <span className="text-center font-semibold text-sm text-text-secondary">
          {t.rich('link', {
            underline: (chunk) => <span className="underline">{chunk}</span>,
          })}
        </span>
      </div>
    </section>
  );
}
