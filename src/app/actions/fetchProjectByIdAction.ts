'use server';

import { z } from 'zod';

import { FetchProjectByIdDTO } from '@domain/dtos';
import makeFetchProjectByIdUseCase from '@factories/useCases/makeFetchProjectByIdUseCase';

const schema = z.object({
  id: z.string().min(1, 'Project ID is required'),
});

export default async function fetchProjectByIdAction(
  params: FetchProjectByIdDTO
) {
  try {
    const dto = schema.parse(params);
    const project = await makeFetchProjectByIdUseCase().execute(dto);

    if (!project) throw new Error();

    return {
      project: {
        ...project,
      },
    };
  } catch (error) {
    return { project: null };
  }
}
