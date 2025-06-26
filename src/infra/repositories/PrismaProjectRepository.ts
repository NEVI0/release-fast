import 'server-only';

import { prisma } from '@configs/prisma';

import { Project, ProjectAbstract } from '@domain/entities';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class PrismaProjectRepository
  implements ProjectRepositoryAbstract
{
  private prisma = prisma;

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
    return new Project(project);
  }

  public async create(project: ProjectAbstract): Promise<ProjectAbstract> {
    const newProject = await this.prisma.project.create({
      data: project,
    });

    return new Project(newProject);
  }

  public async update(project: ProjectAbstract): Promise<ProjectAbstract> {
    const updatedProject = await this.prisma.project.update({
      where: { id: project.id },
      data: project,
    });

    if (!updatedProject) throw new Error('Project not found');
    return new Project(updatedProject);
  }

  public async deleteById(id: string): Promise<void> {
    await this.prisma.project.delete({
      where: { id },
    });
  }
}
