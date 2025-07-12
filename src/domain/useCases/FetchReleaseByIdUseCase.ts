import 'server-only';

import { FetchReleaseByIdDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class FetchReleaseByIdUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: FetchReleaseByIdDTO) {
    this.validateDto(dto);
    return await this.releaseRepository.findById(dto.id);
  }

  private validateDto(dto: FetchReleaseByIdDTO) {
    if (!dto.id) {
      throw new Error('The release ID is required');
    }
  }
}
