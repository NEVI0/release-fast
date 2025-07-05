'use server';

import { z } from 'zod';

import makeFetchAllReleasesUseCase from '@factories/useCases/makeFetchAllReleasesUseCase';

import { FetchAllReleasesDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  projectId: z.string().min(1, 'Project ID is required'),
});

export default async function fetchAllReleasesAction(
  params: FetchAllReleasesDTO
) {
  try {
    const dto = schema.parse(params);
    const releases = await makeFetchAllReleasesUseCase().execute(dto);

    return {
      success: true,
      releases: releases.map((release) => ({
        id: release.id,
        title: release.title,
        shortDescription: release.shortDescription,
        fullDescription: release.fullDescription,
        version: release.version,
        projectId: release.projectId,
        createdAt: release.createdAt,
        updatedAt: release.updatedAt,
      })),
    };
  } catch (error) {
    const { message } = handleError(error, 'fetchAllReleasesAction');

    return {
      success: false,
      message,
    };
  }
}
