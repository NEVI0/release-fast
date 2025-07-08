'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Calendar,
  Code2Icon,
  Edit3Icon,
  FileText,
  GitBranch,
  GitCompareArrows,
  MessageSquare,
  Plus,
} from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';

import { useForm, useToast } from '@app/hooks';
import {
  createReleaseValidationSchema,
  CreateReleaseValidationSchema,
} from '@app/validations';

import { Button, HorizontalDivider, Input, Textarea } from '@app/components/ui';
import { GenerateWithIAButton } from './components';
import { createReleaseAction } from '@app/actions';

interface FormProps {
  project: ProjectAbstract;
}

export default function Form({ project }: FormProps) {
  const toast = useToast();
  const router = useRouter();
  const form = useForm<CreateReleaseValidationSchema>({
    schema: createReleaseValidationSchema,
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: CreateReleaseValidationSchema) {
    try {
      console.log({ data });
      setIsLoading(true);

      const { release } = await createReleaseAction({} as any);

      if (!release) throw new Error();

      toast.success('Release criada com sucesso');
      router.push('/dash/projects/' + project.id);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Erro ao criar release'
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
        <h3 className="font-semibold text-2xl">
          Informe as branches para comparação
        </h3>

        <div className="flex items-end gap-4">
          <Input
            id="baseBranch"
            type="text"
            label="Base branch"
            placeholder="E.g.: master"
            className="w-full"
            icon={GitBranch}
            required
            {...form.register('baseBranch')}
          />

          <Input
            id="headBranch"
            type="text"
            label="Head branch"
            placeholder="E.g.: my-feature"
            className="w-full"
            icon={GitBranch}
            required
            {...form.register('headBranch')}
          />

          <Button
            type="button"
            variant="primary"
            className="w-[184px]"
            disabled={isLoading}
          >
            Compare
            <GitCompareArrows className="size-5" />
          </Button>
        </div>
      </div>

      <HorizontalDivider />

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl">
          Preencha as informações da sua release
        </h3>

        <Input
          id="title"
          type="text"
          label="Title"
          icon={Edit3Icon}
          error={form.errors.title?.message}
          {...form.register('title')}
        />

        <Input
          id="version"
          type="text"
          label="Versão"
          placeholder="Ex.: v1.0.0"
          icon={Code2Icon}
          error={form.errors.version?.message}
          {...form.register('version')}
        />

        <Input
          id="short-description"
          type="text"
          label="Descrição breve"
          placeholder="Uma breve descrição da release"
          rightButton={<GenerateWithIAButton />}
          icon={MessageSquare}
          error={form.errors.shortDescription?.message}
          {...form.register('shortDescription')}
        />

        <Textarea
          id="full-description"
          label="Descrição detalhada da sua release para o usuário final"
          placeholder="Uma descrição mais detalhada da release"
          rightButton={<GenerateWithIAButton />}
          icon={FileText}
          error={form.errors.fullDescription?.message}
          {...form.register('fullDescription')}
        />

        <Input
          id="availableAt"
          type="date"
          label="Data de liberação da release"
          icon={Calendar}
          error={form.errors.availableAt?.message}
          {...form.register('availableAt')}
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href={`/dash/projects/${project.id}`}>
          <Button type="button" className="w-[184px]">
            Cancelar
          </Button>
        </Link>

        <Button
          type="button"
          variant="primary"
          className="w-[184px]"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create release'}
          <Plus className="size-5" />
        </Button>
      </div>
    </form>
  );
}
