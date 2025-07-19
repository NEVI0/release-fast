import 'server-only';

import { FeedbackRepositoryAbstract } from '@domain/repositories';
import PrismaFeedbackRepository from '@infra/repositories/PrismaFeedbackRepository';

let instance: FeedbackRepositoryAbstract | null = null;

export default function makeFeedbackRepository() {
  if (!instance) {
    instance = new PrismaFeedbackRepository();
  }

  return instance;
}
