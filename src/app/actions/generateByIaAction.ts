'use server';

import { z } from 'zod';

import makeGenerateByIaUseCase from '@factories/useCases/makeGenerateByIaUseCase';

import { GenerateByIaDTO } from '@domain/dtos';

const schema = z.object({
  prompt: z.string().min(1, 'The prompt is required'),
});

export default async function generateByIaAction(params: GenerateByIaDTO) {
  try {
    const dto = schema.parse(params);
    const result = await makeGenerateByIaUseCase().execute(dto);

    return {
      result,
    };
  } catch (error) {
    return {
      result: 'Could not undertend what was described...',
    };
  }
}
