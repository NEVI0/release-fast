import 'server-only';

import { Release } from '@domain/entities';
import { CreateReleaseDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class CreateReleaseUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: CreateReleaseDTO) {
    this.validateDto(dto);

    const release = new Release(dto);
    return await this.releaseRepository.create(release);
  }

  private validateDto(dto: CreateReleaseDTO) {
    if (!dto.baseBranch) {
      throw new Error('You must provide the base branch name');
    }

    if (!dto.headBranch) {
      throw new Error('You must provide the head branch name');
    }

    if (!dto.title) {
      throw new Error('You must provide the release title');
    }

    if (!dto.version) {
      throw new Error('You must provide the release version');
    }

    if (!dto.shortDescription) {
      throw new Error('You must provide a short description');
    }

    if (dto.shortDescription.length > 250) {
      throw new Error(
        `The short description should have less than ${250} characters`
      );
    }

    if (!dto.fullDescription) {
      throw new Error('You must provide the full description');
    }

    if (!dto.availableAt) {
      throw new Error('You must provide the available date');
    }

    if (!dto.projectId) {
      throw new Error('The project ID is required');
    }
  }
}
