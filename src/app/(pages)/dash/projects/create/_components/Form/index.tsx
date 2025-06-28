'use client';

import { useState } from 'react';
import { Session } from 'next-auth';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Code2Icon, MessageSquare, Plus } from 'lucide-react';

import {
  createProjectValidationSchema,
  CreateProjectValidationSchema,
} from '@app/validation';

import { useForm, useToast } from '@app/hooks';
import { createProjectAction } from '@app/actions';
import { Button, Input, Select } from '@app/components/ui';

interface FormProps {
  session: Session;
}

export default function Form({ session }: FormProps) {
  const toast = useToast();
  const router = useRouter();
  const form = useForm<CreateProjectValidationSchema>({
    schema: createProjectValidationSchema,
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: CreateProjectValidationSchema) {
    try {
      setIsLoading(true);

      const { success, message } = await createProjectAction({
        ...data,
        userId: session.user?.id!,
      });

      if (!success) throw new Error(message);

      toast.success('Projeto criado com sucesso');
      router.push('/dash/projects');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Erro ao criar projeto'
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
          label="Nome do projeto"
          placeholder="Ex.: E-commerce, Blog, etc."
          icon={Box}
          error={form.errors.name?.message}
          {...form.register('name')}
        />

        <Input
          id="description"
          type="text"
          label="Descrição do projeto"
          placeholder="Uma breve descrição do projeto"
          icon={MessageSquare}
          error={form.errors.description?.message}
          {...form.register('description')}
        />

        <div className="flex items-start gap-4 w-full">
          <Select
            id="repository-type"
            label="Tipo de repositório"
            options={[
              { label: 'GitHub', value: 'github' },
              { label: 'GitLab', value: 'gitlab' },
            ]}
            className="w-[300px]"
            // error={form.errors.repositoryType?.message}
            // {...form.register('repositoryType')}
          />

          <Input
            id="url"
            type="text"
            label="URL do repositório do projeto"
            placeholder="Ex.: https://github.com/user/repo"
            icon={Code2Icon}
            className="w-full"
            error={form.errors.url?.message}
            {...form.register('url')}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href="/dash/projects">
          <Button type="button" className="w-[184px]" disabled={isLoading}>
            Cancelar
          </Button>
        </Link>

        <Button
          type="submit"
          variant="primary"
          className="w-[184px]"
          disabled={isLoading}
        >
          {isLoading ? 'Criando...' : 'Criar projeto'}
          <Plus className="size-5" />
        </Button>
      </div>
    </form>
  );
}
