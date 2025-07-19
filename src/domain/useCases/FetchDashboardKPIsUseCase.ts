import 'server-only';

import { FetchDashboardKPIsDTO } from '@domain/dtos';
import {
  ProjectRepositoryAbstract,
  ReleaseRepositoryAbstract,
} from '@domain/repositories';
import { ProjectAbstract } from '@domain/entities';

export default class FetchDashboardKPIsUseCase {
  constructor(
    private readonly projectRepository: ProjectRepositoryAbstract,
    private readonly releaseRepository: ReleaseRepositoryAbstract
  ) {}

  public async execute(dto: FetchDashboardKPIsDTO) {
    this.validateDto(dto);

    const projects = await this.projectRepository.findAll(dto.userId);
    const releases = await this.sumReleases(projects);

    return {
      projects: projects.length,
      releases,
    };
  }

  private validateDto(dto: FetchDashboardKPIsDTO) {
    if (!dto.userId) {
      throw new Error('The user ID is required');
    }
  }

  private async sumReleases(projects: ProjectAbstract[]) {
    const promises: Array<Promise<{ releases: number }>> = [];

    projects.forEach((project) => {
      promises.push(this.releaseRepository.count(project.id));
    });

    const result = await Promise.all(promises);

    return result
      .map((result) => result.releases)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}
