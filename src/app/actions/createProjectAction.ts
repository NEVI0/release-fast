'use server';

import { CreateProjectDTO } from '@domain/dtos';
import makeCreateProjectUseCase from '@factories/useCases/makeCreateProjectUseCase';

export default async function createProjectAction(dto: CreateProjectDTO) {
  try {
    const project = await makeCreateProjectUseCase().execute(dto);

    return {
      project: {
        ...project,
      },
    };
  } catch (error) {
    return {
      project: null,
    };
  }
}
