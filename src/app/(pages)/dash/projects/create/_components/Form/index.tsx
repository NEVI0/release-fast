'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, MessageSquare, Plus, Search } from 'lucide-react';

import { SessionAbstract } from '@domain/entities';

import {
  createProjectValidationSchema,
  CreateProjectValidationSchema,
} from '@app/validations';
import { createProjectAction } from '@app/actions';
import { useForm, useToast } from '@app/hooks';
import { useFetchRepositories } from './hooks';

import { Button, HorizontalDivider, Input } from '@app/components/ui';
import { Repository } from './components';

interface FormProps {
  session: SessionAbstract;
}

export default function Form({ session }: FormProps) {
  const toast = useToast();
  const router = useRouter();
  const form = useForm<CreateProjectValidationSchema>({
    schema: createProjectValidationSchema,
  });

  const selectedRepository = form.watch('repository');

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { repositories } = useFetchRepositories({
    provider: session.provider,
    token: session.token,
    user: session.user.username,
    search,
  });

  async function handleSubmit(data: CreateProjectValidationSchema) {
    try {
      setIsLoading(true);

      const { project } = await createProjectAction({
        ...data,
        userId: session.user.id,
        provider: session.provider,
      });

      if (!project) throw new Error();

      toast.success('Projeto criado com sucesso');
      router.push('/dash/projects/' + project.id);
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
          required
          error={form.errors.name?.message}
          {...form.register('name')}
        />

        <Input
          id="description"
          type="text"
          label="Descrição do projeto"
          placeholder="Uma breve descrição do projeto"
          icon={MessageSquare}
          required
          error={form.errors.description?.message}
          {...form.register('description')}
        />

        <Input
          id="search"
          type="text"
          label="Pesquise pelo repositório do seu projeto"
          icon={Search}
          required
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <input hidden disabled {...form.register('repository')} />
        <input hidden disabled {...form.register('repositoryUrl')} />
      </div>

      <HorizontalDivider />

      {!!repositories.length ? (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">Selecione um repository</h3>

          <ul className="flex flex-col gap-2">
            {repositories.map((repository) => (
              <li key={repository.id}>
                <Repository
                  repository={repository}
                  selected={selectedRepository === repository.fullname}
                  onSelect={() => {
                    form.setValue('repository', repository.fullname);
                    form.setValue('repositoryUrl', repository.url);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">
            Nenhum repositório encontrado...
          </h3>
        </div>
      )}

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
          disabled={isLoading || !form.isValid}
        >
          {isLoading ? 'Criando...' : 'Criar projeto'}
          <Plus className="size-5" />
        </Button>
      </div>
    </form>
  );
}
