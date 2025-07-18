'use server';

import { UpdateUserDataDTO } from '@domain/dtos';
import makeUpdateUserDataUseCase from '@factories/useCases/makeUpdateUserDataUseCase';

export default async function updateUserDataAction(dto: UpdateUserDataDTO) {
  try {
    const user = await makeUpdateUserDataUseCase().execute(dto);
    if (!user) throw new Error();

    return {
      user: { ...user },
    };
  } catch (error) {
    return { user: null };
  }
}
