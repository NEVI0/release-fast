'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Mail, RefreshCw, Trash2, User } from 'lucide-react';

import { UserAbstract } from '@domain/entities';
import { useForm, useToast } from '@app/hooks';
import { UpdateUserValidationSchema } from '@app/validations';

import updateUserValidationSchema from '@app/validations/updateUserValidation';
import { Button, Input } from '@app/components/ui';

interface FormProps {
  user: UserAbstract;
}

export default function Form({ user }: FormProps) {
  const toast = useToast();
  const router = useRouter();
  const form = useForm<UpdateUserValidationSchema>({
    schema: updateUserValidationSchema,
    defaultValues: {
      name: user.name,
      email: user.email || '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: UpdateUserValidationSchema) {
    try {
      setIsLoading(true);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Error updating data'
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          type="text"
          label="Your name"
          icon={User}
          required
          error={form.errors.name?.message}
          {...form.register('name')}
        />

        <Input
          id="email"
          type="email"
          label="Your e-mail"
          icon={Mail}
          required
          error={form.errors.email?.message}
          {...form.register('email')}
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href="/dash/projects">
          <Button type="button" className="w-[184px]" disabled={isLoading}>
            Cancel
            <Button.Icon icon={Trash2} />
          </Button>
        </Link>

        <Button
          type="submit"
          variant="primary"
          className="w-[184px]"
          disabled={isLoading || !form.isValid}
        >
          {isLoading ? 'Updating...' : 'Update data'}
          <Button.Icon icon={RefreshCw} loading={isLoading} />
        </Button>
      </div>
    </form>
  );
}
