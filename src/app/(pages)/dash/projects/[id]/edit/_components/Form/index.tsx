'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Box, MessageSquare, RefreshCw, Trash2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

import {
  updateProjectValidationSchema,
  UpdateProjectValidationSchema,
} from '@app/validations';
import { handleError } from '@app/helpers';
import { updateProjectAction } from '@app/actions';
import { useForm, useToast } from '@app/hooks';

import { Button, Input } from '@app/components/ui';

interface FormProps {
  project: ProjectAbstract;
}

export default function Form({ project }: FormProps) {
  const t = useTranslations('page.editProject');

  const toast = useToast();
  const router = useRouter();
  const form = useForm<UpdateProjectValidationSchema>({
    schema: updateProjectValidationSchema,
    defaultValues: {
      name: project.name,
      description: project.description,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: UpdateProjectValidationSchema) {
    try {
      setIsLoading(true);

      const updated = await updateProjectAction({
        ...data,
        id: project.id,
      });
      if (!updated.project) throw new Error(t('toast.error'));

      toast.success(t('toast.success'));
      router.push('/dash/projects/' + project.id);
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
          label={t('input.name.label')}
          placeholder={t('input.name.placeholder')}
          icon={Box}
          required
          error={
            form.errors.name ? t(form.errors.name.message as any) : undefined
          }
          {...form.register('name')}
        />

        <Input
          id="description"
          type="text"
          label={t('input.description.label')}
          placeholder={t('input.description.placeholder')}
          icon={MessageSquare}
          maxLength={MAX_DESCRIPTION_LENGTH}
          rightContent={
            <small className="text-text-secondary text-sm">
              {t('input.description.max', { max: MAX_DESCRIPTION_LENGTH })}
            </small>
          }
          required
          error={
            form.errors.description
              ? t(form.errors.description.message as any)
              : undefined
          }
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
          <Button.Icon icon={RefreshCw} loading={isLoading} />
        </Button>

        <Link
          href={`/dash/projects/${project.id}`}
          className="w-full md:w-[184px]"
        >
          <Button type="button" className="w-full" disabled={isLoading}>
            {t('action.cancel')}
            <Button.Icon icon={Trash2} />
          </Button>
        </Link>
      </div>
    </form>
  );
}
