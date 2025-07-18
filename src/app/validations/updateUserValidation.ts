import { z } from 'zod';

const updateUserValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .email('It must be a valid e-mail')
    .min(1, 'E-mail is required'),
});

export type UpdateUserValidationSchema = z.infer<
  typeof updateUserValidationSchema
>;

export default updateUserValidationSchema;
