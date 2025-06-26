'use server';

import { z } from 'zod';

import { CreateReleaseDTO } from '@domain/dtos';
import { makeCreateReleaseUseCase } from '@factories/useCases';
import { handleError } from '@app/helpers';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  shortDescription: z.string().min(1, 'Short description is required'),
  fullDescription: z.string().min(1, 'Full description is required'),
  version: z.string().min(1, 'Version is required'),
  projectId: z.string().min(1, 'Project ID is required'),
});

export default async function createReleaseAction(params: CreateReleaseDTO) {
  try {
    const dto = schema.parse(params);
    const release = await makeCreateReleaseUseCase().execute(dto);

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
    const { message } = handleError(error, 'createReleaseAction');

    return {
      success: false,
      message,
    };
  }
}
