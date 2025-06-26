import 'server-only';

import { Project } from '@domain/entities';
import { CreateProjectDTO } from '@domain/dtos';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class CreateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepositoryAbstract) {}

  public async execute(dto: CreateProjectDTO) {
    const project = new Project(dto);
    return await this.projectRepository.create(project);
  }
}
