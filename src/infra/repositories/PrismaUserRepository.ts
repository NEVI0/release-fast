import 'server-only';

import { prisma } from '@configs/prisma';

import { User, UserAbstract } from '@domain/entities';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class PrismaUserRepository implements UserRepositoryAbstract {
  private prisma = prisma;

  public async findById(id: string): Promise<UserAbstract | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return new User({
      id: user.id,
      name: user.name,
      email: user.email ?? '',
      emailVerified: user.emailVerified ?? undefined,
      image: user.image ?? undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }

  public async deleteById(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
