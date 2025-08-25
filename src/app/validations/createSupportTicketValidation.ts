import { z } from 'zod';

const createSupportTicketValidationSchema = z.object({
  title: z.string().min(1, 'input.title.error'),
  description: z.string().min(1, 'input.description.error'),
});

export type CreateSupportTicketValidationSchema = z.infer<
  typeof createSupportTicketValidationSchema
>;

export default createSupportTicketValidationSchema;
