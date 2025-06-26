'use server';

import { z } from 'zod';

import { FetchReleaseByIdDTO } from '@domain/dtos';
import { makeFetchReleaseByIdUseCase } from '@factories/useCases';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'Release ID is required'),
});

export default async function fetchReleaseByIdAction(
  params: FetchReleaseByIdDTO
) {
  try {
    const dto = schema.parse(params);
    const release = await makeFetchReleaseByIdUseCase().execute(dto);

    if (!release) {
      return {
        success: false,
        message: 'Release not found',
      };
    }

    return {
      success: true,
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
    const { message } = handleError(error, 'fetchReleaseByIdAction');

    return {
      success: false,
      message,
    };
  }
}
