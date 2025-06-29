import 'server-only';

import { prisma } from '@configs/prisma';

import { UserRepositoryAbstract } from '@domain/repositories';

export default class PrismaUserRepository implements UserRepositoryAbstract {
  private prisma = prisma;

  public async deleteById(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
