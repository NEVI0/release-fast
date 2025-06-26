import 'server-only';

import { DeleteProjectByIdDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class DeleteProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: DeleteProjectByIdDTO) {
    await this.projectRepository.deleteById(dto.id);
  }
}
