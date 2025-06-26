import 'server-only';

import { FetchReleaseByIdDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class FetchReleaseByIdUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: FetchReleaseByIdDTO) {
    return await this.releaseRepository.findById(dto.id);
  }
}
