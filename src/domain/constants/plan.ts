import { PlanType } from '@domain/entities';

interface Details {
  name: string;
  value: number;
}

export const FREE_TRIAL_DAYS = 7;

export const PLAN_DETAILS_BY_TYPE: Record<PlanType, Details> = {
  free: {
    name: 'Free',
    value: 0,
  },
  starter: {
    name: 'Starter',
    value: 5,
  },
  pro: {
    name: 'Starter',
    value: 15,
  },
  enterprise: {
    name: 'Enterprise',
    value: 50,
  },
};
