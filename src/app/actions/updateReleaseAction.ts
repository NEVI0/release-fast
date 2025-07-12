'use server';

import { UpdateReleaseDTO } from '@domain/dtos';
import makeUpdateReleaseUseCase from '@factories/useCases/makeUpdateReleaseUseCase';

export default async function updateReleaseAction(dto: UpdateReleaseDTO) {
  try {
    const release = await makeUpdateReleaseUseCase().execute(dto);

    if (!release) throw new Error();

    return {
      release: {
        id: release.id,
        title: release.title,
        shortDescription: release.shortDescription,
        fullDescription: release.fullDescription,
        version: release.version,
        projectId: release.projectId,
        createdAt: release.createdAt,
        updatedAt: release.updatedAt,
      },
    };
  } catch (error) {
    return { release: null };
  }
}
