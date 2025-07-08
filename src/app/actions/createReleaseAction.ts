'use server';

import { CreateReleaseDTO } from '@domain/dtos';
import makeCreateReleaseUseCase from '@factories/useCases/makeCreateReleaseUseCase';

export default async function createReleaseAction(dto: CreateReleaseDTO) {
  try {
    const release = await makeCreateReleaseUseCase().execute(dto);

    return {
      success: true,
      release: {
        id: release.id,
        title: release.title,
        shortDescription: release.shortDescription,
        fullDescription: release.fullDescription,
        version: release.version,
        baseBranch: release.baseBranch,
        headBranch: release.headBranch,
        projectId: release.projectId,
        availableAt: release.availableAt,
        createdAt: release.createdAt,
        updatedAt: release.updatedAt,
      },
    };
  } catch (error) {
    return {
      release: null,
    };
  }
}
