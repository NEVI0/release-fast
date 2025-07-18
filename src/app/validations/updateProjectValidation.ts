import { z } from 'zod';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

const updateProjectValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(
      MAX_DESCRIPTION_LENGTH,
      `The description should have less than ${MAX_DESCRIPTION_LENGTH} characters`
    ),
});

export type UpdateProjectValidationSchema = z.infer<
  typeof updateProjectValidationSchema
>;

export default updateProjectValidationSchema;
