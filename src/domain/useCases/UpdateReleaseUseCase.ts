import 'server-only';

import { Release } from '@domain/entities';
import { UpdateReleaseDTO } from '@domain/dtos';
import { ReleaseRepositoryAbstract } from '@domain/repositories';
import { MAX_SHORT_DESCRIPTION_LENGTH } from '@domain/constants/release';

export default class UpdateReleaseUseCase {
  constructor(private readonly releaseRepository: ReleaseRepositoryAbstract) {}

  public async execute(dto: UpdateReleaseDTO) {
    if (!dto.id) throw new Error('The release ID is required');

    const release = await this.releaseRepository.findById(dto.id);
    if (!release) throw new Error('Release not found');

    this.validateDto(dto);

    const updatedRelease = new Release({
      ...release,
      ...dto,
      updatedAt: new Date(),
    });

    return await this.releaseRepository.update(updatedRelease);
  }

  private validateDto(dto: UpdateReleaseDTO) {
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

    if (dto.shortDescription.length > MAX_SHORT_DESCRIPTION_LENGTH) {
      throw new Error(
        `The short description should have less than ${MAX_SHORT_DESCRIPTION_LENGTH} characters`
      );
    }

    if (!dto.fullDescription) {
      throw new Error('You must provide the full description');
    }

    if (!dto.availableAt) {
      throw new Error('You must provide the available date');
    }
  }
}
