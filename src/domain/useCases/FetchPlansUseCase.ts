import { PlanAbstract } from '@domain/entities';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';

export default class FetchPlansUseCase {
  constructor() {}

  public execute(): PlanAbstract[] {
    const starter: PlanAbstract = {
      id: this.generateId(),
      type: 'starter',
      price: PLAN_DETAILS_BY_TYPE['starter'].value,
      freeTrialDays: 7,
      features: [
        `Up to ${PLAN_DETAILS_BY_TYPE['starter'].projectsAmount} projects`,
        'AI-powered releases generation',
        'Basic support',
      ],
    };

    const pro: PlanAbstract = {
      id: this.generateId(),
      type: 'pro',
      price: PLAN_DETAILS_BY_TYPE['pro'].value,
      freeTrialDays: 7,
      features: [
        `Up to ${PLAN_DETAILS_BY_TYPE['pro'].projectsAmount} projects`,
        'AI-powered releases generation',
        'Advanced AI suggestions',
        'Priority support',
      ],
    };

    const enterprise: PlanAbstract = {
      id: this.generateId(),
      type: 'enterprise',
      price: PLAN_DETAILS_BY_TYPE['enterprise'].value,
      freeTrialDays: 7,
      features: [
        'Unlimited projects',
        'Advanced AI-powered releases generation',
        'Advanced AI suggestions',
        'Priority support',
        'Access to future features in advance',
      ],
    };

    return [starter, pro, enterprise];
  }

  private generateId() {
    return (
      new Date().getTime().toString() +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
