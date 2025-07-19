import 'server-only';

import { SupportTicket } from '@domain/entities';
import { CreateSupportTicketDTO } from '@domain/dtos';
import { SupportTicketRepositoryAbstract } from '@domain/repositories';

export default class CreateSupportTicketUseCase {
  constructor(
    private readonly supportTicketRepository: SupportTicketRepositoryAbstract
  ) {}

  public async execute(dto: CreateSupportTicketDTO) {
    this.validateDto(dto);

    return await this.supportTicketRepository.create(
      new SupportTicket({
        title: dto.title,
        description: dto.description,
        userId: dto.userId,
      })
    );
  }

  private validateDto(dto: CreateSupportTicketDTO) {
    if (!dto.title) {
      throw new Error('You must provide the support ticket title');
    }

    if (!dto.description) {
      throw new Error('You must provide the support ticket description');
    }

    if (!dto.userId) {
      throw new Error('The user ID is required');
    }
  }
}
