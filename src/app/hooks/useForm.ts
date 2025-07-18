import { FieldValues, useForm as useReactHookForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface UseFormProps {
  schema: z.ZodSchema<any, any>;
  defaultValues?: any;
}

export default function useForm<T extends FieldValues>({
  schema,
  defaultValues,
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
    defaultValues,
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
