'use server';

import { CreateReleaseDTO } from '@domain/dtos';
import makeCreateReleaseUseCase from '@factories/useCases/makeCreateReleaseUseCase';

export default async function createReleaseAction(dto: CreateReleaseDTO) {
  const release = await makeCreateReleaseUseCase().execute(dto);

  return {
    release: {
      ...release,
    },
  };
}
