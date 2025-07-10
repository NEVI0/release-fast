'use server';

import { z } from 'zod';

import { FetchReleaseByIdDTO } from '@domain/dtos';
import makeFetchReleaseByIdUseCase from '@factories/useCases/makeFetchReleaseByIdUseCase';

const schema = z.object({
  id: z.string().min(1, 'Release ID is required'),
});

export default async function fetchReleaseByIdAction(
  params: FetchReleaseByIdDTO
) {
  try {
    const dto = schema.parse(params);
    const release = await makeFetchReleaseByIdUseCase().execute(dto);

    if (!release) return { release: null };

    return {
      release: {
        id: release.id,
        title: release.title,
        shortDescription: release.shortDescription,
        fullDescription: release.fullDescription,
        version: release.version,
        projectId: release.projectId,
        baseBranch: release.baseBranch,
        headBranch: release.headBranch,
        availableAt: release.availableAt,
        createdAt: release.createdAt,
        updatedAt: release.updatedAt,
      },
    };
  } catch (error) {
    return { release: null };
  }
}
