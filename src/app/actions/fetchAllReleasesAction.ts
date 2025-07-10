'use server';

import { z } from 'zod';

import { FetchAllReleasesDTO } from '@domain/dtos';
import makeFetchAllReleasesUseCase from '@factories/useCases/makeFetchAllReleasesUseCase';

const schema = z.object({
  projectId: z.string().min(1, 'Project ID is required'),
});

export default async function fetchAllReleasesAction(
  params: FetchAllReleasesDTO
) {
  try {
    const dto = schema.parse(params);
    const releases = await makeFetchAllReleasesUseCase().execute(dto);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return {
      releases: releases.map((release) => ({
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
      })),
    };
  } catch (error) {
    return {
      releases: [],
    };
  }
}
