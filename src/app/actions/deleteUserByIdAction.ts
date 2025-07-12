'use server';

import { z } from 'zod';

import { DeleteUserByIdDTO } from '@domain/dtos';
import makeDeleteUserByIdUseCase from '@factories/useCases/makeDeleteUserByIdUseCase';

const schema = z.object({
  id: z.string().min(1, 'User ID is required'),
});

export default async function deleteUserByIdAction(params: DeleteUserByIdDTO) {
  try {
    const dto = schema.parse(params);
    await makeDeleteUserByIdUseCase().execute(dto);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
