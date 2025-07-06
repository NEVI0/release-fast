'use server';

import { CreateProjectDTO } from '@domain/dtos';
import makeCreateProjectUseCase from '@factories/useCases/makeCreateProjectUseCase';

export default async function createProjectAction(dto: CreateProjectDTO) {
  try {
    const project = await makeCreateProjectUseCase().execute(dto);

    return {
      project: {
        id: project.id,
        name: project.name,
        description: project.description,
        userId: project.userId,
        repository: project.repository,
        provider: project.provider,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    };
  } catch (error) {
    return {
      project: null,
    };
  }
}
