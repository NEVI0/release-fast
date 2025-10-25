import { SupportTicket } from '@domain/entities';
import { SupportTicketRepositoryAbstract } from '@domain/repositories';

export default class FakeSupportTicketRepository
  implements SupportTicketRepositoryAbstract
{
  private tickets: SupportTicket[] = [];

  public create: SupportTicketRepositoryAbstract['create'] = async (ticket) => {
    this.tickets.push(ticket);
    return Promise.resolve(ticket);
  };
}
