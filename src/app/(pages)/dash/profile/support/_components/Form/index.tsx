'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('page.support');

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
      if (!supportTicket) throw new Error(t('toast.error'));

      toast.success(t('toast.success'));
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
          label={t('input.title.label')}
          icon={Edit3}
          required
          error={form.errors.title?.message}
          {...form.register('title')}
        />

        <Textarea
          id="description"
          label={t('input.description.label')}
          placeholder={t('input.description.placeholder')}
          icon={MessageSquare}
          required
          error={form.errors.description?.message}
          {...form.register('description')}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          className="w-full md:w-[184px]"
          disabled={isLoading || !form.isValid}
        >
          {t(isLoading ? 'action.submitting' : 'action.submit')}
          <Button.Icon icon={Plus} loading={isLoading} />
        </Button>

        <Link href="/dash/profile" className="w-full md:w-[184px]">
          <Button type="button" className="w-full" disabled={isLoading}>
            {t('action.cancel')}
            <Button.Icon icon={Trash2} />
          </Button>
        </Link>
      </div>
    </form>
  );
}
