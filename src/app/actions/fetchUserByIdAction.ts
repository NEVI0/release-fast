'use server';

import { z } from 'zod';

import makeFetchUserByIdUseCase from '@factories/useCases/makeFetchUserByIdUseCase';

import { FetchUserByIdDTO } from '@domain/dtos';

const schema = z.object({
  id: z.string().min(1, 'User ID is required'),
});

export default async function fetchUserByIdAction(params: FetchUserByIdDTO) {
  try {
    const dto = schema.parse(params);
    const user = await makeFetchUserByIdUseCase().execute(dto);

    if (!user) throw new Error();

    return {
      user: {
        ...user,
      },
    };
  } catch (error) {
    return { user: null };
  }
}
