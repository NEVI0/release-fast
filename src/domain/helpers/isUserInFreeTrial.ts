import { FREE_TRIAL_DAYS } from '@domain/constants/plan';

const DAYS = 1000 * 60 * 60 * 24 * FREE_TRIAL_DAYS;

export default function isUserInFreeTrial(date: Date | string) {
  return new Date(date).getTime() > new Date().getTime() - DAYS;
}
