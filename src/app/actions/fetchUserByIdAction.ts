'use server';

import { z } from 'zod';

import makeFetchUserByIdUseCase from '@factories/useCases/makeFetchUserByIdUseCase';

import { FetchUserByIdDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'O ID do usuário é obrigatório'),
});

export default async function fetchUserByIdAction(params: FetchUserByIdDTO) {
  try {
    const dto = schema.parse(params);
    const user = await makeFetchUserByIdUseCase().execute(dto);

    if (!user) throw new Error('Usuário não encontrado');

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  } catch (error) {
    const { message } = handleError(error, 'fetchReleaseByIdAction');

    return {
      user: null,
      message,
    };
  }
}
