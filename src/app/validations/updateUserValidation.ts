import { z } from 'zod';

const updateUserValidationSchema = z.object({
  name: z.string().min(1, 'input.name.error'),
  email: z.string().email('input.title.invalid').min(1, 'input.email.error'),
});

export type UpdateUserValidationSchema = z.infer<
  typeof updateUserValidationSchema
>;

export default updateUserValidationSchema;
