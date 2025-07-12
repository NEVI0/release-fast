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
  Trash2,
} from 'lucide-react';

import { ProjectAbstract, SessionAbstract } from '@domain/entities';
import { MAX_SHORT_DESCRIPTION_LENGTH } from '@domain/constants/release';

import { useForm, useToast } from '@app/hooks';
import { createReleaseAction } from '@app/actions';
import {
  compareBranchesValidationSchema,
  CompareBranchesValidationSchema,
  createReleaseValidationSchema,
  CreateReleaseValidationSchema,
} from '@app/validations';

import { convertAiResult, getAiPrompt } from './helpers';
import { useCompareBranches, useAiAgent } from './hooks';

import { Button, HorizontalDivider, Input, Textarea } from '@app/components/ui';

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
  const [isComparing, setIsComparing] = useState(false);
  const [alreadyComparatedBranches, setAlreadyComparatedBranches] =
    useState(false);

  async function handleCompareBranches(data: CompareBranchesValidationSchema) {
    try {
      setIsComparing(true);
      setAlreadyComparatedBranches(false);

      const diff = await branchesController.compare({
        repository: project.repository,
        baseBranch: data.baseBranch,
        headBranch: data.headBranch,
      });

      const result = await aiAgentController.prompt({
        prompt: getAiPrompt(diff),
      });

      const [shortDescription, fullDescription] = await convertAiResult(result);

      releaseForm.setValue('baseBranch', data.baseBranch);
      releaseForm.setValue('headBranch', data.headBranch);
      releaseForm.setValue('shortDescription', shortDescription);
      releaseForm.setValue('fullDescription', fullDescription);

      setAlreadyComparatedBranches(true);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Error comparing branches'
      );
    } finally {
      setIsComparing(false);
    }
  }

  async function handleCreateRelease(data: CreateReleaseValidationSchema) {
    try {
      setIsCreating(true);

      const { release } = await createReleaseAction({
        ...data,
        projectId: project.id,
      });

      if (!release) throw new Error('Error creating release');

      toast.success('Release created successfully');
      router.push('/dash/projects/' + project.id);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Error creating release'
      );
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <form
        className="flex flex-col gap-4"
        onSubmit={branchesForm.handleSubmit(handleCompareBranches)}
      >
        <h3 className="font-semibold text-2xl">
          Enter the branches to compare
        </h3>

        <div className="flex items-end gap-4">
          <Input
            id="baseBranch"
            type="text"
            label="Base branch"
            placeholder="E.g.: master"
            className="flex-1"
            icon={GitBranch}
            disabled={isComparing}
            required
            {...branchesForm.register('baseBranch')}
          />

          <Input
            id="headBranch"
            type="text"
            label="Head branch"
            placeholder="E.g.: my-feature"
            className="flex-1"
            icon={GitBranch}
            disabled={isComparing}
            required
            {...branchesForm.register('headBranch')}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-[200px]"
            disabled={!branchesForm.isValid || isComparing}
          >
            {isComparing ? 'Comparing...' : 'Compare'}
            <Button.Icon icon={GitCompareArrows} loading={isComparing} />
          </Button>
        </div>
      </form>

      <HorizontalDivider />

      <form
        className="flex flex-col gap-8"
        onSubmit={releaseForm.handleSubmit(handleCreateRelease)}
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">
            {alreadyComparatedBranches
              ? 'Fill in your release information'
              : 'Compare the branches to complete the form'}
          </h3>

          <input
            disabled
            hidden
            type="text"
            {...releaseForm.register('baseBranch')}
          />
          <input
            disabled
            hidden
            type="text"
            {...releaseForm.register('headBranch')}
          />

          <Input
            id="title"
            type="text"
            label="Title"
            icon={Edit3Icon}
            required
            disabled={!alreadyComparatedBranches}
            error={releaseForm.errors.title?.message}
            {...releaseForm.register('title')}
          />

          <Input
            id="version"
            type="text"
            label="Version"
            placeholder="E.g.: v1.0.0"
            icon={Code2Icon}
            required
            disabled={!alreadyComparatedBranches}
            error={releaseForm.errors.version?.message}
            {...releaseForm.register('version')}
          />

          <Input
            id="short-description"
            type="text"
            label="Short description"
            placeholder="A brief description of the release"
            icon={MessageSquare}
            required
            maxLength={MAX_SHORT_DESCRIPTION_LENGTH}
            rightContent={
              <small className="text-text-secondary text-sm">
                {MAX_SHORT_DESCRIPTION_LENGTH} characters max.
              </small>
            }
            disabled={!alreadyComparatedBranches}
            error={releaseForm.errors.shortDescription?.message}
            {...releaseForm.register('shortDescription')}
          />

          <Textarea
            id="full-description"
            label="Detailed description of your release for the end user"
            placeholder="A more detailed description of the release"
            icon={FileText}
            required
            disabled={!alreadyComparatedBranches}
            error={releaseForm.errors.fullDescription?.message}
            {...releaseForm.register('fullDescription')}
          />

          <Input
            id="availableAt"
            type="date"
            label="Release date"
            icon={Calendar}
            required
            disabled={!alreadyComparatedBranches}
            error={releaseForm.errors.availableAt?.message}
            {...releaseForm.register('availableAt')}
          />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link href={`/dash/projects/${project.id}`}>
            <Button type="button" className="w-[184px]">
              Cancel
              <Button.Icon icon={Trash2} />
            </Button>
          </Link>

          <Button
            type="submit"
            variant="primary"
            className="w-[184px]"
            disabled={
              !releaseForm.isValid || !alreadyComparatedBranches || isCreating
            }
          >
            {isCreating ? 'Creating...' : 'Create release'}
            <Button.Icon icon={Plus} loading={isCreating} />
          </Button>
        </div>
      </form>
    </div>
  );
}
