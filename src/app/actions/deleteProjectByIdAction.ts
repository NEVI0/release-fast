'use server';

import { z } from 'zod';

import makeDeleteProjectByIdUseCase from '@factories/useCases/makeDeleteProjectByIdUseCase';

import { DeleteProjectByIdDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'Project ID is required'),
});

export default async function deleteProjectByIdAction(
  params: DeleteProjectByIdDTO
) {
  try {
    const dto = schema.parse(params);
    await makeDeleteProjectByIdUseCase().execute(dto);

    return {
      success: true,
      message: 'Project deleted successfully',
    };
  } catch (error) {
    const { message } = handleError(error, 'deleteProjectByIdAction');

    return {
      success: false,
      message,
    };
  }
}
