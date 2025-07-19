'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Edit3, MessageSquare, Plus, Trash2 } from 'lucide-react';

import { SessionAbstract } from '@domain/entities';

import {
  createSupportTicketValidationSchema,
  CreateSupportTicketValidationSchema,
} from '@app/validations';
import { handleError } from '@app/helpers';
import { createSupportTicketAction } from '@app/actions';
import { useForm, useToast } from '@app/hooks';

import { Button, Input, Textarea } from '@app/components/ui';

interface FormProps {
  session: SessionAbstract;
}

export default function Form({ session }: FormProps) {
  const toast = useToast();
  const router = useRouter();
  const form = useForm<CreateSupportTicketValidationSchema>({
    schema: createSupportTicketValidationSchema,
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: CreateSupportTicketValidationSchema) {
    try {
      setIsLoading(true);

      const { supportTicket } = await createSupportTicketAction({
        ...data,
        userId: session.user.id,
      });

      if (!supportTicket) throw new Error('Could create the support ticket');

      toast.success('Support ticket created successfully');
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
          id="title"
          type="text"
          label="Title"
          icon={Edit3}
          required
          error={form.errors.title?.message}
          {...form.register('title')}
        />

        <Textarea
          id="description"
          label="Type a description of the problem"
          placeholder="Tell us here"
          icon={MessageSquare}
          required
          error={form.errors.description?.message}
          {...form.register('description')}
        />
      </div>

      <div className="flex flex-row-reverse items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          className="w-[184px]"
          disabled={isLoading || !form.isValid}
        >
          {isLoading ? 'Creating...' : 'Create ticket'}
          <Button.Icon icon={Plus} loading={isLoading} />
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
