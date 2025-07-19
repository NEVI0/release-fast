import { SupportTicketAbstract } from '@domain/entities';

export default interface SupportTicketRepositoryAbstract {
  create(supportTicket: SupportTicketAbstract): Promise<SupportTicketAbstract>;
}
