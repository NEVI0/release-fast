import { PlanType } from '@domain/entities';

interface Price {
  value: number;
}

export const FREE_TRIAL_DAYS = 7;

export const PRICES_BY_PLAN: Record<PlanType, Price> = {
  free: {
    value: 0,
  },
  starter: {
    value: 5,
  },
  enterprise: {
    value: 15,
  },
  pro: {
    value: 50,
  },
};
