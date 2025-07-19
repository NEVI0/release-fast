'use server';

import { UpdateUserDataDTO } from '@domain/dtos';
import makeUpdateUserDataUseCase from '@factories/useCases/makeUpdateUserDataUseCase';

export default async function updateUserDataAction(dto: UpdateUserDataDTO) {
  const user = await makeUpdateUserDataUseCase().execute(dto);

  return {
    user: { ...user },
  };
}
