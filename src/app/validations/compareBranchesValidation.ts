import { z } from 'zod';

const compareBranchesValidationSchema = z.object({
  baseBranch: z.string().min(1, 'Base branch is required'),
  headBranch: z.string().min(1, 'Head branch is required'),
});

export type CompareBranchesValidationSchema = z.infer<
  typeof compareBranchesValidationSchema
>;

export default compareBranchesValidationSchema;
