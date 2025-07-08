import { z } from 'zod';

const createReleaseValidationSchema = z.object({
  baseBranch: z.string().min(1, 'Base branch is required'),
  headBranch: z.string().min(1, 'Head branch is required'),
  title: z.string().min(1, 'Title is required'),
  shortDescription: z.string().min(1, 'Short description is required'),
  fullDescription: z.string().min(1, 'Full description is required'),
  version: z.string().min(1, 'Version is required'),
  availableAt: z.string().min(1, 'Date is required'),
});

export type CreateReleaseValidationSchema = z.infer<
  typeof createReleaseValidationSchema
>;

export default createReleaseValidationSchema;
