'use server';

import { UpdateReleaseDTO } from '@domain/dtos';
import makeUpdateReleaseUseCase from '@factories/useCases/makeUpdateReleaseUseCase';

export default async function updateReleaseAction(dto: UpdateReleaseDTO) {
  try {
    const release = await makeUpdateReleaseUseCase().execute(dto);

    if (!release) throw new Error();

    return {
      release: {
        ...release,
      },
    };
  } catch (error) {
    return { release: null };
  }
}
