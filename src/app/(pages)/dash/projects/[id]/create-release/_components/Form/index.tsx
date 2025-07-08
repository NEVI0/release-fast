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

import { ProjectAbstract, SessionAbstract } from '@domain/entities';

import { useForm, useToast } from '@app/hooks';
import { createReleaseAction } from '@app/actions';
import {
  compareBranchesValidationSchema,
  CompareBranchesValidationSchema,
  createReleaseValidationSchema,
  CreateReleaseValidationSchema,
} from '@app/validations';

import { useCompareBranches, useAiAgent } from './hooks';

import { Button, HorizontalDivider, Input, Textarea } from '@app/components/ui';
import { GenerateWithIAButton } from './components';

interface FormProps {
  session: SessionAbstract;
  project: ProjectAbstract;
}

export default function Form({ session, project }: FormProps) {
  const toast = useToast();
  const router = useRouter();
  const aiAgentController = useAiAgent();

  const branchesController = useCompareBranches({
    provider: session.provider,
    token: session.token,
  });
  const branchesForm = useForm<CompareBranchesValidationSchema>({
    schema: compareBranchesValidationSchema,
  });

  const releaseForm = useForm<CreateReleaseValidationSchema>({
    schema: createReleaseValidationSchema,
  });

  const [isCreating, setIsCreating] = useState(false);

  async function handleCompareBranches(data: CompareBranchesValidationSchema) {
    try {
      const diff = await branchesController.compare({
        repository: project.repository,
        baseBranch: data.baseBranch,
        headBranch: data.headBranch,
      });

      console.log({ diff });

      const result = await aiAgentController.prompt({
        prompt: `Analyze this git diff and write a friendly changelog: ${diff}`,
      });

      console.log({ result });
    } catch (error) {
      console.log({ error });
    }
  }

  async function handleCreateRelease(data: CreateReleaseValidationSchema) {
    try {
      console.log({ data });
      setIsCreating(true);

      const { release } = await createReleaseAction({} as any);

      if (!release) throw new Error();

      toast.success('Release criada com sucesso');
      router.push('/dash/projects/' + project.id);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Erro ao criar release'
      );
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div
      className="flex flex-col gap-8"
      // onSubmit={form.handleSubmit(handleSubmit)}
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={branchesForm.handleSubmit(handleCompareBranches)}
      >
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
            {...branchesForm.register('baseBranch')}
          />

          <Input
            id="headBranch"
            type="text"
            label="Head branch"
            placeholder="E.g.: my-feature"
            className="w-full"
            icon={GitBranch}
            required
            {...branchesForm.register('headBranch')}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-[184px]"
            disabled={isCreating}
          >
            Compare
            <GitCompareArrows className="size-5" />
          </Button>
        </div>
      </form>

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
          error={releaseForm.errors.title?.message}
          {...releaseForm.register('title')}
        />

        <Input
          id="version"
          type="text"
          label="Versão"
          placeholder="Ex.: v1.0.0"
          icon={Code2Icon}
          error={releaseForm.errors.version?.message}
          {...releaseForm.register('version')}
        />

        <Input
          id="short-description"
          type="text"
          label="Descrição breve"
          placeholder="Uma breve descrição da release"
          rightButton={<GenerateWithIAButton />}
          icon={MessageSquare}
          error={releaseForm.errors.shortDescription?.message}
          {...releaseForm.register('shortDescription')}
        />

        <Textarea
          id="full-description"
          label="Descrição detalhada da sua release para o usuário final"
          placeholder="Uma descrição mais detalhada da release"
          rightButton={<GenerateWithIAButton />}
          icon={FileText}
          error={releaseForm.errors.fullDescription?.message}
          {...releaseForm.register('fullDescription')}
        />

        <Input
          id="availableAt"
          type="date"
          label="Data de liberação da release"
          icon={Calendar}
          error={releaseForm.errors.availableAt?.message}
          {...releaseForm.register('availableAt')}
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
          disabled={isCreating}
        >
          {isCreating ? 'Creating...' : 'Create release'}
          <Plus className="size-5" />
        </Button>
      </div>
    </div>
  );
}
