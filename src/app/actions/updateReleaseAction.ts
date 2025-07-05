'use server';

import { z } from 'zod';

import makeUpdateReleaseUseCase from '@factories/useCases/makeUpdateReleaseUseCase';

import { UpdateReleaseDTO } from '@domain/dtos';
import { handleError } from '@app/helpers';

const schema = z.object({
  id: z.string().min(1, 'Release ID is required'),
  title: z.string().min(1, 'Title is required'),
  shortDescription: z.string().min(1, 'Short description is required'),
  fullDescription: z.string().min(1, 'Full description is required'),
  version: z.string().min(1, 'Version is required'),
});

export default async function updateReleaseAction(params: UpdateReleaseDTO) {
  try {
    const dto = schema.parse(params);
    const release = await makeUpdateReleaseUseCase().execute(dto);

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
    const { message } = handleError(error, 'updateReleaseAction');

    return {
      success: false,
      message,
    };
  }
}
