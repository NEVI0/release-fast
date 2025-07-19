import 'server-only';

import CreateSupportTicketUseCase from '@domain/useCases/CreateSupportTicketUseCase';
import makeSupportTicketRepository from '@factories/repositories/makeSupportTicketRepository';

let instance: CreateSupportTicketUseCase | null = null;

export default function makeCreateSupportTicketUseCase() {
  if (!instance) {
    const supportTicketRepository = makeSupportTicketRepository();
    instance = new CreateSupportTicketUseCase(supportTicketRepository);
  }

  return instance;
}
