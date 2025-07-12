'use server';

import { z } from 'zod';

import { UpdateProjectDTO } from '@domain/dtos';
import makeUpdateProjectUseCase from '@factories/useCases/makeUpdateProjectUseCase';

const schema = z.object({
  id: z.string().min(1, 'Project ID is required'),
  name: z.string().min(1, 'Name is required'),
  description: z.string(),
});

export default async function updateProjectAction(params: UpdateProjectDTO) {
  try {
    const dto = schema.parse(params);
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
