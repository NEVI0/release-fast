import 'server-only';

import { Project, UserAbstract } from '@domain/entities';
import { CreateProjectDTO } from '@domain/dtos';
import {
  ProjectRepositoryAbstract,
  UserRepositoryAbstract,
} from '@domain/repositories';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';
import { PLAN_DETAILS_BY_TYPE } from '@domain/constants/plan';
import { isUserInFreeTrial } from '@domain/helpers';

export default class CreateProjectUseCase {
  constructor(
    private readonly projectRepository: ProjectRepositoryAbstract,
    private readonly userRepository: UserRepositoryAbstract
  ) {}

  public async execute(dto: CreateProjectDTO) {
    this.validateDto(dto);

    const user = await this.fetchUserData(dto.userId);
    await this.validateProjectsAmount(user);

    const project = new Project(dto);
    return await this.projectRepository.create(project);
  }

  private validateDto(dto: CreateProjectDTO) {
    if (!dto.name) {
      throw new Error('You must provide the project name');
    }

    if (!dto.description) {
      throw new Error('You must provide the project description');
    }

    if (dto.description.length > MAX_DESCRIPTION_LENGTH) {
      throw new Error(
        `The description should have less than ${MAX_DESCRIPTION_LENGTH} characters`
      );
    }

    if (!dto.provider) {
      throw new Error('The repository provider is required');
    }

    if (!dto.repository) {
      throw new Error('You must provide the project repository');
    }

    if (!dto.repositoryUrl) {
      throw new Error('You must provide the project repository URL');
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

  private async validateProjectsAmount(user: UserAbstract) {
    const projects = await this.projectRepository.findAll(user.id);
    const isFreeTrial = this.checkFreeTrial(user);

    const canCreateThreeProjects = isFreeTrial && user.plan === 'free';

    const projectsAmountTotal = projects.length;
    const { projectsAmount } = canCreateThreeProjects
      ? { projectsAmount: 3 }
      : PLAN_DETAILS_BY_TYPE[user.plan];

    if (projectsAmount !== 'unlimited') {
      if (projectsAmountTotal >= projectsAmount) {
        throw new Error(
          'You can not create new projects unless you upgrade your plan'
        );
      }
    }
  }

  private checkFreeTrial(user: UserAbstract) {
    return isUserInFreeTrial(user.createdAt);
  }
}
