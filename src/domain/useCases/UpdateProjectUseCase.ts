import 'server-only';

import { Project } from '@domain/entities';
import { UpdateProjectDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class UpdateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: UpdateProjectDTO) {
    if (!dto.id) throw new Error('The project ID is required');

    const project = await this.projectRepository.findById(dto.id);
    if (!project) throw new Error('Project not found');

    this.validateDto(dto);

    const updatedProject = new Project({
      ...project,
      ...dto,
      updatedAt: new Date(),
    });

    return await this.projectRepository.update(updatedProject);
  }

  private validateDto(dto: UpdateProjectDTO) {
    if (!dto.name) {
      throw new Error('You must provide the project name');
    }

    if (!dto.description) {
      throw new Error('You must provide the project description');
    }

    if (!dto.repository) {
      throw new Error('You must provide the project repository');
    }

    if (!dto.repositoryUrl) {
      throw new Error('You must provide the project repository URL');
    }
  }
}
