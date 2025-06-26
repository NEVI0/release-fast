import 'server-only';

import { FetchAllReleasesDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class FetchAllReleasesUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: FetchAllReleasesDTO) {
    return await this.releaseRepository.findAll(dto.projectId);
  }
}
