import { faker } from '@faker-js/faker';

import {
  PlanAbstract,
  PlanCurrency,
  PlanType,
  PLAN_TYPES,
  PLAN_CURRENCIES,
} from '@domain/entities';

interface PlanProps {
  id?: string;
  type?: PlanType;
  price?: {
    [key in PlanCurrency]: number;
  };
  freeTrialDays?: number;
  features?: string[];
}

export default class Plan implements PlanAbstract {
  public id: PlanAbstract['id'];
  public type: PlanAbstract['type'];
  public price: PlanAbstract['price'];
  public freeTrialDays: PlanAbstract['freeTrialDays'];
  public features: PlanAbstract['features'];

  constructor({
    id = faker.string.uuid(),
    type = faker.helpers.arrayElement(PLAN_TYPES),
    price = {
      [PLAN_CURRENCIES[0]]: faker.number.int({ min: 0, max: 100 }),
      [PLAN_CURRENCIES[1]]: faker.number.int({ min: 0, max: 100 }),
      [PLAN_CURRENCIES[2]]: faker.number.int({ min: 0, max: 100 }),
    },
    freeTrialDays = faker.number.int({ min: 0, max: 100 }),
    features = [
      'component.plan.feature.projects.upTo.three',
      'component.plan.feature.release.basic',
      'component.plan.feature.support.basic',
    ],
  }: PlanProps) {
    this.id = id;
    this.type = type;
    this.price = price;
    this.freeTrialDays = freeTrialDays;
    this.features = features;
  }
}
