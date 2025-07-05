'use server';

import { z } from 'zod';

import makeDeleteUserByIdUseCase from '@factories/useCases/makeDeleteUserByIdUseCase';

import { DeleteUserByIdDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'O ID do usuário é obrigatório!'),
});

export default async function deleteUserByIdAction(params: DeleteUserByIdDTO) {
  try {
    const dto = schema.parse(params);
    await makeDeleteUserByIdUseCase().execute(dto);
  } catch (error) {
    const { message } = handleError(error, 'deleteUserByIdAction');
    return { message };
  }
}
