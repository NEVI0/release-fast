'use server';

import { z } from 'zod';

import { CreateProjectDTO } from '@domain/dtos';
import { makeCreateProjectUseCase } from '@factories/useCases';
import { handleError } from '@app/helpers';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  userId: z.string().min(1, 'User ID is required'),
});

export default async function createProjectAction(params: CreateProjectDTO) {
  try {
    const dto = schema.parse(params);
    const project = await makeCreateProjectUseCase().execute(dto);

    return {
      success: true,
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
    const { message } = handleError(error, 'createProjectAction');

    return {
      success: false,
      message,
    };
  }
}
