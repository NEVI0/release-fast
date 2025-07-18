'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, MessageSquare, RefreshCw, Trash2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

import {
  updateProjectValidationSchema,
  UpdateProjectValidationSchema,
} from '@app/validations';
import { updateProjectAction } from '@app/actions';
import { useForm, useToast } from '@app/hooks';

import { Button, Input } from '@app/components/ui';

interface FormProps {
  project: ProjectAbstract;
}

export default function Form({ project }: FormProps) {
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

      if (!updated.project) throw new Error();

      toast.success('Project updated successfully');
      router.push('/dash/projects/' + project.id);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Error updating project'
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
          label="Project name"
          placeholder="E.g.: E-commerce, Blog, etc."
          icon={Box}
          required
          error={form.errors.name?.message}
          {...form.register('name')}
        />

        <Input
          id="description"
          type="text"
          label="Project description"
          placeholder="A brief description of the project"
          icon={MessageSquare}
          maxLength={MAX_DESCRIPTION_LENGTH}
          rightContent={
            <small className="text-text-secondary text-sm">
              {MAX_DESCRIPTION_LENGTH} characters max.
            </small>
          }
          required
          error={form.errors.description?.message}
          {...form.register('description')}
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href={`/dash/projects/${project.id}`}>
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
          {isLoading ? 'Updating...' : 'Update project'}
          <Button.Icon icon={RefreshCw} loading={isLoading} />
        </Button>
      </div>
    </form>
  );
}
