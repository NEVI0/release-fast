import 'server-only';

import { SupportTicketRepositoryAbstract } from '@domain/repositories';
import PrismaSupportTicketRepository from '@infra/repositories/PrismaSupportTicketRepository';

let instance: SupportTicketRepositoryAbstract | null = null;

export default function makeSupportTicketRepository() {
  if (!instance) {
    instance = new PrismaSupportTicketRepository();
  }

  return instance;
}
