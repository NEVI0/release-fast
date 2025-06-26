import 'server-only';

import { Project } from '@domain/entities';
import { UpdateProjectDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class UpdateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: UpdateProjectDTO) {
    const project = await this.projectRepository.findById(dto.id);
    if (!project) throw new Error('Project not found');

    const updatedProject = new Project({
      ...project,
      ...dto,
      updatedAt: new Date(),
    });

    return await this.projectRepository.update(updatedProject);
  }
}
