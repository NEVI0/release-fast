import 'server-only';

import { Release } from '@domain/entities';
import { CreateReleaseDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class CreateReleaseUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: CreateReleaseDTO) {
    const release = new Release(dto);
    return await this.releaseRepository.create(release);
  }
}
