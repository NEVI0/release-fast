import 'server-only';

import { FetchProjectByIdDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class FetchProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: FetchProjectByIdDTO) {
    return await this.projectRepository.findById(dto.id);
  }
}
