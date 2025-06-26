import 'server-only';

import { Release } from '@domain/entities';
import { UpdateReleaseDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class UpdateReleaseUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: UpdateReleaseDTO) {
    const release = await this.releaseRepository.findById(dto.id);
    if (!release) throw new Error('Release not found');

    const updatedRelease = new Release({
      ...release,
      ...dto,
      updatedAt: new Date(),
    });

    return await this.releaseRepository.update(updatedRelease);
  }
}
