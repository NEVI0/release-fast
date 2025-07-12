import 'server-only';

import { Project } from '@domain/entities';
import { CreateProjectDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

export default class CreateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: CreateProjectDTO) {
    this.validateDto(dto);

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
}
