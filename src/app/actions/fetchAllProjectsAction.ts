'use server';

import { z } from 'zod';

import { FetchAllProjectsDTO } from '@domain/dtos';
import makeFetchAllProjectsUseCase from '@factories/useCases/makeFetchAllProjectsUseCase';

const schema = z.object({
  userId: z.string().min(1, 'User ID is required'),
});

export default async function fetchAllProjectsAction(
  params: FetchAllProjectsDTO
) {
  try {
    const dto = schema.parse(params);
    const projects = await makeFetchAllProjectsUseCase().execute(dto);

    return {
      projects: projects.map((project) => ({
        ...project,
      })),
    };
  } catch (error) {
    return { projects: [] };
  }
}
