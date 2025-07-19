'use server';

import { UpdateProjectDTO } from '@domain/dtos';
import makeUpdateProjectUseCase from '@factories/useCases/makeUpdateProjectUseCase';

export default async function updateProjectAction(dto: UpdateProjectDTO) {
  const project = await makeUpdateProjectUseCase().execute(dto);

  return {
    project: {
      ...project,
    },
  };
}
