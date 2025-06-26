'use server';

import { z } from 'zod';

import { DeleteReleaseByIdDTO } from '@domain/dtos';
import { makeDeleteReleaseByIdUseCase } from '@factories/useCases';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'Release ID is required'),
});

export default async function deleteReleaseByIdAction(
  params: DeleteReleaseByIdDTO
) {
  try {
    const dto = schema.parse(params);
    await makeDeleteReleaseByIdUseCase().execute(dto);

    return {
      success: true,
      message: 'Release deleted successfully',
    };
  } catch (error) {
    const { message } = handleError(error, 'deleteReleaseByIdAction');

    return {
      success: false,
      message,
    };
  }
}
