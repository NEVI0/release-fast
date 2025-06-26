import 'server-only';

import { DeleteReleaseByIdDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class DeleteReleaseByIdUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: DeleteReleaseByIdDTO) {
    await this.releaseRepository.deleteById(dto.id);
  }
}
