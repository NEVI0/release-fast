import { z } from 'zod';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

const updateProjectValidationSchema = z.object({
  name: z.string().min(1, 'input.name.error'),
  description: z
    .string()
    .min(1, 'input.description.error')
    .max(
      MAX_DESCRIPTION_LENGTH,
      `The description should have less than ${MAX_DESCRIPTION_LENGTH} characters`
    ),
});

export type UpdateProjectValidationSchema = z.infer<
  typeof updateProjectValidationSchema
>;

export default updateProjectValidationSchema;
