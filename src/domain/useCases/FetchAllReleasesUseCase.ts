import 'server-only';

import { FetchAllReleasesDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class FetchAllReleasesUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: FetchAllReleasesDTO) {
    this.validateDto(dto);
    return await this.releaseRepository.findAll(dto.projectId);
  }

  private validateDto(dto: FetchAllReleasesDTO) {
    if (!dto.projectId) {
      throw new Error('The project ID is required');
    }
  }
}
