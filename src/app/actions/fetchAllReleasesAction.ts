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

    return {
      releases: releases.map((release) => ({
        ...release,
      })),
    };
  } catch (error) {
    return { releases: [] };
  }
}
