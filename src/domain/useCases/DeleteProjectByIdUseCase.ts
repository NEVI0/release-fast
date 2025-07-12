import 'server-only';

import { DeleteProjectByIdDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class DeleteProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: DeleteProjectByIdDTO) {
    this.validateDto(dto);
    await this.projectRepository.deleteById(dto.id);
  }

  private validateDto(dto: DeleteProjectByIdDTO) {
    if (!dto.id) {
      throw new Error('The project ID is required');
    }
  }
}
