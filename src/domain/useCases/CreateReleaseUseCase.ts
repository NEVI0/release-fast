import 'server-only';

import { Release, UserAbstract } from '@domain/entities';
import { CreateReleaseDTO } from '@domain/dtos';
import {
  ReleaseRepositoryAbstract,
  UserRepositoryAbstract,
} from '@domain/repositories';
import { isUserInFreeTrial } from '@domain/helpers';

export default class CreateReleaseUseCase {
  constructor(
    private readonly releaseRepository: ReleaseRepositoryAbstract,
    private readonly userRepository: UserRepositoryAbstract
  ) {}

  public async execute(dto: CreateReleaseDTO) {
    this.validateDto(dto);

    const user = await this.fetchUserData(dto.userId);
    this.validateFreeTrial(user);

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

    if (!dto.fullDescription) {
      throw new Error('You must provide the full description');
    }

    if (!dto.availableAt) {
      throw new Error('You must provide the available date');
    }

    if (!dto.projectId) {
      throw new Error('The project ID is required');
    }

    if (!dto.userId) {
      throw new Error('The user ID is required');
    }
  }

  private async fetchUserData(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('Unauthorized');

    return user as UserAbstract;
  }

  private validateFreeTrial(user: UserAbstract) {
    if (user.plan === 'free') {
      const isFreeTrial = isUserInFreeTrial(user.createdAt);

      if (!isFreeTrial) {
        throw new Error(
          'You can not create new releases unless you upgrade your plan'
        );
      }
    }
  }
}
