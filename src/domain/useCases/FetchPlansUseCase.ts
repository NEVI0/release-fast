import { PlanAbstract } from '@domain/entities';
import { PRICES_BY_PLAN } from '@domain/constants/plan';

export default class FetchPlansUseCase {
  constructor() {}

  public execute(): PlanAbstract[] {
    const starter: PlanAbstract = {
      id: this.generateId(),
      type: 'starter',
      price: PRICES_BY_PLAN['starter'].value,
      freeTrialDays: 7,
      features: [
        'Up to 3 projects',
        'AI-powered release notes generation',
        'Basic notifications',
      ],
    };

    const pro: PlanAbstract = {
      id: this.generateId(),
      type: 'pro',
      price: PRICES_BY_PLAN['pro'].value,
      freeTrialDays: 7,
      features: [
        'Up to 15 projects',
        'AI-powered release notes generation',
        'Advanced AI suggestions',
        'Basic notifications',
        'Priority support',
      ],
    };

    const enterprise: PlanAbstract = {
      id: this.generateId(),
      type: 'enterprise',
      price: PRICES_BY_PLAN['enterprise'].value,
      freeTrialDays: 7,
      features: [
        'Unlimited projects',
        'Advanced AI-powered release notes generation',
        'Advanced AI suggestions',
        'Email notifications',
        'Priority support',
        'Access to all features',
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
