import 'server-only';

import { prisma } from '@configs/prisma';

import { Project, ProjectAbstract } from '@domain/entities';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class PrismaProjectRepository
  implements ProjectRepositoryAbstract
{
  private prisma = prisma;

  public async count(userId: string): Promise<{ projects: number }> {
    const projects = await this.prisma.project.count({
      where: { id: userId },
    });

    return { projects };
  }

  public async findAll(userId: string): Promise<ProjectAbstract[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        userId,
      },
    });

    return projects.map((project: any) => new Project(project));
  }

  public async findById(id: string): Promise<ProjectAbstract | null> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) return null;
    return this.toDomain(project);
  }

  public async create(project: ProjectAbstract): Promise<ProjectAbstract> {
    const newProject = await this.prisma.project.create({
      data: {
        name: project.name,
        description: project.description,
        userId: project.userId,
        repositoryId: project.repository.id,
        repositoryName: project.repository.name,
        repositoryUrl: project.repository.url,
        provider: project.repository.provider,
      },
    });

    return this.toDomain(newProject);
  }

  public async update(project: ProjectAbstract): Promise<ProjectAbstract> {
    const updatedProject = await this.prisma.project.update({
      where: { id: project.id },
      data: {
        name: project.name,
        description: project.description,
        userId: project.userId,
        repositoryId: project.repository.id,
        repositoryName: project.repository.name,
        repositoryUrl: project.repository.url,
        provider: project.repository.provider,
      },
    });

    if (!updatedProject) throw new Error('Project not found');
    return this.toDomain(updatedProject);
  }

  public async deleteById(id: string): Promise<void> {
    await this.prisma.project.delete({
      where: { id },
    });
  }

  private toDomain(project: any) {
    return new Project({
      ...project,
      repository: {
        id: project.repositoryId || '',
        name: project.repositoryName,
        url: project.repositoryUrl,
        provider: project.provider,
      },
    });
  }
}
