'use server';

import makeCreateProjectUseCase from '@factories/useCases/makeCreateProjectUseCase';

import { CreateProjectDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

export default async function createProjectAction(dto: CreateProjectDTO) {
  try {
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
