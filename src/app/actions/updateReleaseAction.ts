'use server';

import { UpdateReleaseDTO } from '@domain/dtos';
import makeUpdateReleaseUseCase from '@factories/useCases/makeUpdateReleaseUseCase';

export default async function updateReleaseAction(dto: UpdateReleaseDTO) {
  const release = await makeUpdateReleaseUseCase().execute(dto);

  return {
    release: {
      ...release,
    },
  };
}
