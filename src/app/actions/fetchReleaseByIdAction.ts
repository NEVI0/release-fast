'use server';

import { z } from 'zod';

import { FetchReleaseByIdDTO } from '@domain/dtos';
import makeFetchReleaseByIdUseCase from '@factories/useCases/makeFetchReleaseByIdUseCase';

const schema = z.object({
  id: z.string().min(1, 'Release ID is required'),
});

export default async function fetchReleaseByIdAction(
  params: FetchReleaseByIdDTO
) {
  try {
    const dto = schema.parse(params);
    const release = await makeFetchReleaseByIdUseCase().execute(dto);

    if (!release) throw new Error();

    return {
      release: {
        ...release,
      },
    };
  } catch (error) {
    return { release: null };
  }
}
