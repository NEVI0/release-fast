import { PlanAbstract } from '@domain/entities';

export default class FetchPlansUseCase {
  constructor() {}

  public execute(): PlanAbstract[] {
    const starter: PlanAbstract = {
      id: this.generateId(),
      type: 'starter',
      price: 19.9,
      freeTrialDays: 7,
      features: [
        'Até 3 projetos',
        'Geração de release notes com I.A',
        'Notificações por basicas',
      ],
    };

    const pro: PlanAbstract = {
      id: this.generateId(),
      type: 'pro',
      price: 39.9,
      freeTrialDays: 7,
      features: [
        'Até 15 projetos',
        'Geração de release notes com I.A',
        'Sugestões avançadas com I.A',
        'Notificações por basicas',
        'Suporte priorizado',
      ],
    };

    const enterprise: PlanAbstract = {
      id: this.generateId(),
      type: 'enterprise',
      price: 99.9,
      freeTrialDays: 7,
      features: [
        'Projetos ilimitados',
        'Geração de release notes com I.A avançada',
        'Sugestões avançadas com I.A avançada',
        'Notificações por e-mail',
        'Suporte priorizado',
        'Acesso a todas as funcionalidades',
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
