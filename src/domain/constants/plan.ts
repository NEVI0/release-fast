import { PlanType } from '@domain/entities';

interface Details {
  name: string;
  value: number;
  projectsAmount: number | 'unlimited';
}

export const FREE_TRIAL_DAYS = 7;

export const PLAN_DETAILS_BY_TYPE: Record<PlanType, Details> = {
  free: {
    name: 'Free',
    value: 0,
    projectsAmount: 0,
  },
  starter: {
    name: 'Starter',
    value: 5,
    projectsAmount: 3,
  },
  pro: {
    name: 'Professional',
    value: 15,
    projectsAmount: 15,
  },
  enterprise: {
    name: '',
    value: 50,
    projectsAmount: 'unlimited',
  },
};
