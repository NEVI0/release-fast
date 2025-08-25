import { z } from 'zod';

const createFeedbackValidationSchema = z.object({
  title: z.string().min(1, 'input.title.error'),
  description: z.string().min(1, 'input.description.error'),
});

export type CreateFeedbackValidationSchema = z.infer<
  typeof createFeedbackValidationSchema
>;

export default createFeedbackValidationSchema;
