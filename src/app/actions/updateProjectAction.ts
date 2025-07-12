'use server';

import { UpdateProjectDTO } from '@domain/dtos';
import makeUpdateProjectUseCase from '@factories/useCases/makeUpdateProjectUseCase';

export default async function updateProjectAction(dto: UpdateProjectDTO) {
  try {
    const project = await makeUpdateProjectUseCase().execute(dto);

    if (!project) throw new Error();

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
    return { project: null };
  }
}
