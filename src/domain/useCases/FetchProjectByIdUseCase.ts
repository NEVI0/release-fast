import 'server-only';

import { FetchProjectByIdDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class FetchProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: FetchProjectByIdDTO) {
    this.validateDto(dto);
    return await this.projectRepository.findById(dto.id);
  }

  private validateDto(dto: FetchProjectByIdDTO) {
    if (!dto.id) {
      throw new Error('The project ID is required');
    }
  }
}
