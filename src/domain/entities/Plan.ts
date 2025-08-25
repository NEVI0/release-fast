export type PlanType = 'free' | 'starter' | 'pro' | 'enterprise';
export type PlanCurrency = 'BRL' | 'USD' | 'EUR' | string;

export interface PlanAbstract {
  id: string;
  type: PlanType;
  price: {
    [key: PlanCurrency]: number;
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
