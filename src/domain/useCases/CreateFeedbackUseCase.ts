import 'server-only';

import { Feedback } from '@domain/entities';
import { CreateFeedbackDTO } from '@domain/dtos';
import { FeedbackRepositoryAbstract } from '@domain/repositories';

export default class CreateFeedbackUseCase {
  constructor(
    private readonly feedbackRepository: FeedbackRepositoryAbstract
  ) {}

  public async execute(dto: CreateFeedbackDTO) {
    this.validateDto(dto);

    return await this.feedbackRepository.create(
      new Feedback({
        title: dto.title,
        description: dto.description,
        userId: dto.userId,
      })
    );
  }

  private validateDto(dto: CreateFeedbackDTO) {
    if (!dto.title) {
      throw new Error('You must provide the feedback title');
    }

    if (!dto.description) {
      throw new Error('You must provide the feedback description');
    }
  }
}
