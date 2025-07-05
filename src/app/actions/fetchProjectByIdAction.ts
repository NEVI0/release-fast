'use server';

import { z } from 'zod';

import makeFetchProjectByIdUseCase from '@factories/useCases/makeFetchProjectByIdUseCase';

import { FetchProjectByIdDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'O ID do projeto é obrigatório'),
});

export default async function fetchProjectByIdAction(
  params: FetchProjectByIdDTO
) {
  try {
    const dto = schema.parse(params);
    const project = await makeFetchProjectByIdUseCase().execute(dto);

    if (!project) {
      return {
        project: null,
        message: 'Projeto não encontrado',
      };
    }

    return {
      project: {
        id: project.id,
        name: project.name,
        description: project.description,
        userId: project.userId,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    };
  } catch (error) {
    const { message } = handleError(error, 'fetchProjectByIdAction');

    return {
      project: null,
      message,
    };
  }
}
