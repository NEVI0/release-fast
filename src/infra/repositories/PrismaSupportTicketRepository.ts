import 'server-only';

import { prisma } from '@configs/prisma';

import { SupportTicket, SupportTicketAbstract } from '@domain/entities';
import { SupportTicketRepositoryAbstract } from '@domain/repositories';

export default class PrismaSupportTicketRepository
  implements SupportTicketRepositoryAbstract
{
  private prisma = prisma;

  public async create(
    supportTicket: SupportTicketAbstract
  ): Promise<SupportTicketAbstract> {
    const created = await this.prisma.supportTicket.create({
      data: {
        title: supportTicket.title,
        description: supportTicket.description,
        userId: supportTicket.userId,
      },
    });

    return new SupportTicket({
      id: created.id,
      title: created.title,
      description: created.description,
      userId: created.userId,
      createdAt: created.createdAt,
    });
  }
}
