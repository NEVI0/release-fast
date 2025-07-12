'use server';

import { z } from 'zod';

import { DeleteProjectByIdDTO } from '@domain/dtos';
import makeDeleteProjectByIdUseCase from '@factories/useCases/makeDeleteProjectByIdUseCase';

const schema = z.object({
  id: z.string().min(1, 'Project ID is required'),
});

export default async function deleteProjectByIdAction(
  params: DeleteProjectByIdDTO
) {
  try {
    const dto = schema.parse(params);
    await makeDeleteProjectByIdUseCase().execute(dto);

    return { success: true };
  } catch (error) {
    return { success: true };
  }
}
