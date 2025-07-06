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
    getValues,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useReactHookForm<T>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    getValues,
    setValue,
    errors,
    isValid,
    watch,
  };
}
