import 'server-only';

import { DeleteReleaseByIdDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class DeleteReleaseByIdUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: DeleteReleaseByIdDTO) {
    this.validateDto(dto);
    await this.releaseRepository.deleteById(dto.id);
  }

  private validateDto(dto: DeleteReleaseByIdDTO) {
    if (!dto.id) {
      throw new Error('The release ID is required');
    }
  }
}
