import { PlanType } from '@domain/entities';

export default interface UpdateUserPlanDTO {
  userId: string;
  plan: PlanType;
}
