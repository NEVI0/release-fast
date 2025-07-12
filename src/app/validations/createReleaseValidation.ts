import { z } from 'zod';

import { MAX_SHORT_DESCRIPTION_LENGTH } from '@domain/constants/release';

const createReleaseValidationSchema = z.object({
  baseBranch: z.string().min(1, 'Base branch is required'),
  headBranch: z.string().min(1, 'Head branch is required'),
  title: z.string().min(1, 'Title is required'),
  version: z.string().min(1, 'Version is required'),
  shortDescription: z
    .string()
    .min(1, 'Short description is required')
    .max(
      MAX_SHORT_DESCRIPTION_LENGTH,
      `The short description should have less than ${MAX_SHORT_DESCRIPTION_LENGTH} characters`
    ),
  fullDescription: z.string().min(1, 'Full description is required'),
  availableAt: z.string().min(1, 'Date is required'),
});

export type CreateReleaseValidationSchema = z.infer<
  typeof createReleaseValidationSchema
>;

export default createReleaseValidationSchema;
