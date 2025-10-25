export const PLAN_TYPES = ['free', 'starter', 'pro', 'enterprise'] as const;
export const PLAN_CURRENCIES = ['BRL', 'USD', 'EUR'] as const;

export type PlanType = (typeof PLAN_TYPES)[number];
export type PlanCurrency = (typeof PLAN_CURRENCIES)[number];

export interface PlanAbstract {
  id: string;
  type: PlanType;
  price: {
    [key in PlanCurrency]: number;
  };
  freeTrialDays: number;
  features: string[];
}

export default class Plan implements PlanAbstract {
  public id: PlanAbstract['id'];
  public type: PlanAbstract['type'];
  public price: PlanAbstract['price'];
  public freeTrialDays: PlanAbstract['freeTrialDays'];
  public features: PlanAbstract['features'];

  constructor(props: PlanAbstract) {
    this.id = props.id;
    this.type = props.type;
    this.price = props.price;
    this.freeTrialDays = props.freeTrialDays;
    this.features = props.features;
  }
}
