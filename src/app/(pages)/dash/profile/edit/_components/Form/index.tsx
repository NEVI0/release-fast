'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Mail, RefreshCw, Trash2, User } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import {
  UpdateUserValidationSchema,
  updateUserValidationSchema,
} from '@app/validations';
import { updateUserDataAction } from '@app/actions';
import { handleError } from '@app/helpers';
import { useForm, useToast } from '@app/hooks';

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

      const updated = await updateUserDataAction({ ...data, id: user.id });
      if (!updated.user) throw new Error('Could not update your account data');

      toast.success('Data updated successfully');
      router.push('/dash/profile');
    } catch (error) {
      const { message } = handleError(error);
      toast.error(message);
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

      <div className="flex flex-row-reverse items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          className="w-[184px]"
          disabled={isLoading || !form.isValid}
        >
          {isLoading ? 'Updating...' : 'Update data'}
          <Button.Icon icon={RefreshCw} loading={isLoading} />
        </Button>

        <Link href="/dash/profile">
          <Button type="button" className="w-[184px]" disabled={isLoading}>
            Cancel
            <Button.Icon icon={Trash2} />
          </Button>
        </Link>
      </div>
    </form>
  );
}
