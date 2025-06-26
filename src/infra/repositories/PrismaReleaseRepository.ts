import 'server-only';

import { prisma } from '@configs/prisma';

import { Release, ReleaseAbstract } from '@domain/entities';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class PrismaReleaseRepository
  implements ReleaseRepositoryAbstract
{
  private prisma = prisma;

  public async findAll(projectId: string): Promise<ReleaseAbstract[]> {
    const releases = await this.prisma.release.findMany({
      where: {
        projectId,
      },
    });

    return releases.map((release: any) => new Release(release));
  }

  public async findById(id: string): Promise<ReleaseAbstract | null> {
    const release = await this.prisma.release.findUnique({
      where: { id },
    });

    if (!release) return null;
    return new Release(release);
  }

  public async create(release: ReleaseAbstract): Promise<ReleaseAbstract> {
    const newRelease = await this.prisma.release.create({
      data: {
        title: release.title,
        shortDescription: release.shortDescription,
        fullDescription: release.fullDescription,
        version: release.version,
        projectId: release.projectId,
      },
    });

    return new Release(newRelease);
  }

  public async update(release: ReleaseAbstract): Promise<ReleaseAbstract> {
    const updatedRelease = await this.prisma.release.update({
      where: { id: release.id },
      data: {
        title: release.title,
        shortDescription: release.shortDescription,
        fullDescription: release.fullDescription,
        version: release.version,
        projectId: release.projectId,
      },
    });

    if (!updatedRelease) throw new Error('Release not found');
    return new Release(updatedRelease);
  }

  public async deleteById(id: string): Promise<void> {
    await this.prisma.release.delete({
      where: { id },
    });
  }
}
