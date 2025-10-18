import { PlanType, PlanCurrency } from '@domain/entities';

interface Details {
  name: string;
  value: {
    [key in PlanCurrency]: number;
  };
  projectsAmount: number | 'unlimited';
}

export const FREE_TRIAL_DAYS = 7;

export const PLAN_DETAILS_BY_TYPE: Record<PlanType, Details> = {
  free: {
    name: 'Free',
    value: {
      BRL: 0,
      EUR: 0,
      USD: 0,
    },
    projectsAmount: 0,
  },
  starter: {
    name: 'Starter',
    value: {
      BRL: 19.9,
      EUR: 4.9,
      USD: 4.9,
    },
    projectsAmount: 3,
  },
  pro: {
    name: 'Professional',
    value: {
      BRL: 69.9,
      EUR: 14.9,
      USD: 14.9,
    },
    projectsAmount: 15,
  },
  enterprise: {
    name: 'Enterprise',
    value: {
      BRL: 199.9,
      EUR: 49.9,
      USD: 49.9,
    },
    projectsAmount: 'unlimited',
  },
};
