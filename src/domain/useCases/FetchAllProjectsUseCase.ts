import 'server-only';

import { FetchAllProjectsDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class FetchAllProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: FetchAllProjectsDTO) {
    this.validateDto(dto);
    return await this.projectRepository.findAll(dto.userId);
  }

  private validateDto(dto: FetchAllProjectsDTO) {
    if (!dto.userId) {
      throw new Error('The user ID is required');
    }
  }
}
