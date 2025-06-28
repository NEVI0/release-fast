import { z } from 'zod';

const createProjectValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  // repositoryType: z.string().min(1, 'Repository type is required'),
  url: z.string().min(1, 'URL is required'),
});

export type CreateProjectValidationSchema = z.infer<
  typeof createProjectValidationSchema
>;

export default createProjectValidationSchema;
