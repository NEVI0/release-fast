import 'server-only';

import { prisma } from '@configs/prisma';

import { PlanType, User, UserAbstract } from '@domain/entities';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class PrismaUserRepository implements UserRepositoryAbstract {
  private prisma = prisma;

  public async findById(id: string): Promise<UserAbstract | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;
    return this.userToDomain(user);
  }

  public async findByPaymentId(id: string): Promise<UserAbstract | null> {
    const user = await this.prisma.user.findUnique({
      where: { paymentId: id },
    });

    if (!user) return null;
    return this.userToDomain(user);
  }

  public async update(user: UserAbstract): Promise<UserAbstract> {
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: {
        name: user.name,
        email: user.email || undefined,
        emailVerified: user.emailVerified || undefined,
        image: user.image || undefined,
        plan: user.plan,
        paymentId: user.paymentId || undefined,
        updatedAt: new Date(),
      },
    });

    if (!updatedUser) throw new Error('Could not update the user data...');
    return this.userToDomain(updatedUser);
  }

  public async updateByPaymentId(user: UserAbstract): Promise<UserAbstract> {
    const updatedUser = await this.prisma.user.update({
      where: {
        paymentId: user.paymentId,
      },
      data: {
        name: user.name,
        email: user.email || undefined,
        emailVerified: user.emailVerified || undefined,
        image: user.image || undefined,
        plan: user.plan,
        paymentId: user.paymentId || undefined,
        updatedAt: new Date(),
      },
    });

    if (!updatedUser) throw new Error('Could not update the user data...');
    return this.userToDomain(updatedUser);
  }

  public async deleteById(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  private userToDomain(modelUser: any) {
    return new User({
      id: modelUser.id,
      name: modelUser.name,
      email: modelUser.email ?? '',
      emailVerified: modelUser.emailVerified ?? '',
      image: modelUser.image ?? '',
      plan: modelUser.plan as PlanType,
      paymentId: modelUser.paymentId ?? '',
      createdAt: modelUser.createdAt,
      updatedAt: modelUser.updatedAt,
    });
  }
}
