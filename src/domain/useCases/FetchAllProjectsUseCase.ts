import 'server-only';

import { FetchAllProjectsDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class FetchAllProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: FetchAllProjectsDTO) {
    return await this.projectRepository.findAll(dto.userId);
  }
}
