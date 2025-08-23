import { z } from 'zod';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

const createProjectValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(
      MAX_DESCRIPTION_LENGTH,
      `The description should have less than ${MAX_DESCRIPTION_LENGTH} characters`
    ),
  repositoryId: z.string().min(1, 'Repository ID is required'),
  repositoryName: z.string().min(1, 'Repository is required'),
  repositoryUrl: z.string().min(1, 'Repository URL is required'),
});

export type CreateProjectValidationSchema = z.infer<
  typeof createProjectValidationSchema
>;

export default createProjectValidationSchema;
