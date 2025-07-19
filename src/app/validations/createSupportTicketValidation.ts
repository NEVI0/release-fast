import { z } from 'zod';

const createSupportTicketValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

export type CreateSupportTicketValidationSchema = z.infer<
  typeof createSupportTicketValidationSchema
>;

export default createSupportTicketValidationSchema;
