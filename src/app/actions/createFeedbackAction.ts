'use server';

import { CreateFeedbackDTO } from '@domain/dtos';
import makeCreateFeedbackUseCase from '@factories/useCases/makeCreateFeedbackUseCase';

export default async function createFeedbackAction(dto: CreateFeedbackDTO) {
  const feedback = await makeCreateFeedbackUseCase().execute(dto);

  return {
    feedback: { ...feedback },
  };
}
