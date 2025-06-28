import { FieldValues, useForm as useReactHookForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface UseFormProps {
  schema: z.ZodSchema<any, any>;
}

export default function useForm<T extends FieldValues>({
  schema,
}: UseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useReactHookForm<T>({
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors };
}
