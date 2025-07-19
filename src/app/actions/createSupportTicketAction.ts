'use server';

import { CreateSupportTicketDTO } from '@domain/dtos';
import makeCreateSupportTicketUseCase from '@factories/useCases/makeCreateSupportTicketUseCase';

export default async function createSupportTicketAction(
  dto: CreateSupportTicketDTO
) {
  const supportTicket = await makeCreateSupportTicketUseCase().execute(dto);

  return {
    supportTicket: { ...supportTicket },
  };
}
