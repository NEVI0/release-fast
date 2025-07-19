import 'server-only';

import CreateFeedbackUseCase from '@domain/useCases/CreateFeedbackUseCase';
import makeFeedbackRepository from '@factories/repositories/makeFeedbackRepository';

let instance: CreateFeedbackUseCase | null = null;

export default function makeCreateFeedbackUseCase() {
  if (!instance) {
    const feedbackRepository = makeFeedbackRepository();
    instance = new CreateFeedbackUseCase(feedbackRepository);
  }

  return instance;
}
