'use server';

import { z } from 'zod';

import makeFetchAllProjectsUseCase from '@factories/useCases/makeFetchAllProjectsUseCase';

import { FetchAllProjectsDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  userId: z.string().min(1, 'O ID do usuário é obrigatório!'),
});

export default async function fetchAllProjectsAction(
  params: FetchAllProjectsDTO
) {
  try {
    const dto = schema.parse(params);
    const projects = await makeFetchAllProjectsUseCase().execute(dto);

    return {
      projects: projects.map((project) => ({
        id: project.id,
        name: project.name,
        description: project.description,
        userId: project.userId,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      })),
    };
  } catch (error) {
    const { message } = handleError(error, 'fetchAllProjectsAction');

    return {
      projects: [],
      message,
    };
  }
}
