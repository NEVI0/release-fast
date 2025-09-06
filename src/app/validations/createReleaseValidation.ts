import { z } from 'zod';

const createReleaseValidationSchema = z.object({
  baseBranch: z.string().min(1, 'input.branch.base.error'),
  headBranch: z.string().min(1, 'input.branch.head.error'),
  title: z.string().min(1, 'input.release.title.error'),
  version: z.string().min(1, 'input.release.version.error'),
  shortDescription: z.string().min(1, 'input.release.description.short.error'),
  fullDescription: z.string().min(1, 'input.release.description.full.error'),
  availableAt: z.string().min(1, 'input.release.availableAt.error'),
});

export type CreateReleaseValidationSchema = z.infer<
  typeof createReleaseValidationSchema
>;

export default createReleaseValidationSchema;
