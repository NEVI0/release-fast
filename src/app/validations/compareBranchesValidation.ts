import { z } from 'zod';

const compareBranchesValidationSchema = z.object({
  baseBranch: z.string().min(1, 'input.branch.base.error'),
  headBranch: z.string().min(1, 'input.branch.head.error'),
});

export type CompareBranchesValidationSchema = z.infer<
  typeof compareBranchesValidationSchema
>;

export default compareBranchesValidationSchema;
