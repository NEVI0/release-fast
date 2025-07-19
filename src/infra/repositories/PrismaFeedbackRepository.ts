import 'server-only';

import { prisma } from '@configs/prisma';

import { Feedback, FeedbackAbstract } from '@domain/entities';
import { FeedbackRepositoryAbstract } from '@domain/repositories';

export default class PrismaFeedbackRepository
  implements FeedbackRepositoryAbstract
{
  private prisma = prisma;

  public async create(feedback: FeedbackAbstract): Promise<FeedbackAbstract> {
    const created = await this.prisma.feedback.create({
      data: {
        title: feedback.title,
        description: feedback.description,
        userId: feedback.userId,
      },
    });

    return new Feedback({
      id: created.id,
      title: created.title,
      description: created.description,
      userId: created.userId ?? undefined,
      createdAt: created.createdAt,
    });
  }
}
