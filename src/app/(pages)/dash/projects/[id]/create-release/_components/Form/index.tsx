'use client';

import { useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  AlertTriangle,
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

import { useForm, useToast } from '@app/hooks';
import { createReleaseAction } from '@app/actions';
import { formatDate, handleError } from '@app/helpers';
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
  const t = useTranslations('page.createRelease');

  const toast = useToast();
  const router = useRouter();
  const aiAgentController = useAiAgent();

  const currentDate = useMemo(() => formatDate(new Date(), 'YYYY-MM-DD'), []);

  const branchesController = useCompareBranches({
    provider: session.provider,
    token: session.token,
  });

  const branchesForm = useForm<CompareBranchesValidationSchema>({
    schema: compareBranchesValidationSchema,
  });
  const releaseForm = useForm<CreateReleaseValidationSchema>({
    schema: createReleaseValidationSchema,
    defaultValues: {
      availableAt: currentDate,
    },
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
        repository:
          project.repository[session.provider === 'gitlab' ? 'id' : 'name'],
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
      const { message } = handleError(error);
      toast.error(message);
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
        userId: session.user.id,
      });
      if (!release) throw new Error(t('toast.error'));

      toast.success(t('toast.success'));
      router.push('/dash/projects/' + project.id);
    } catch (error) {
      const { message } = handleError(error);
      toast.error(message);
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
        <h3 className="font-semibold text-2xl">{t('section.one.title')}</h3>

        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <Input
            id="baseBranch"
            type="text"
            label={t('input.branch.base.label')}
            placeholder={t('input.branch.base.placeholder')}
            className="flex-1"
            icon={GitBranch}
            disabled={isComparing}
            required
            {...branchesForm.register('baseBranch')}
          />

          <Input
            id="headBranch"
            type="text"
            label={t('input.branch.head.label')}
            placeholder={t('input.branch.head.placeholder')}
            className="flex-1"
            icon={GitBranch}
            disabled={isComparing}
            required
            {...branchesForm.register('headBranch')}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-[200px]"
            disabled={!branchesForm.isValid || isComparing}
          >
            {t(isComparing ? 'action.comparing' : 'action.compare')}
            <Button.Icon icon={GitCompareArrows} loading={isComparing} />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <AlertTriangle className="size-4 text-text-secondary" />{' '}
          <small className="text-sm text-text-secondary">
            {t('section.one.warning')}
          </small>
        </div>
      </form>

      <HorizontalDivider />

      <form
        className="flex flex-col gap-8"
        onSubmit={releaseForm.handleSubmit(handleCreateRelease)}
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">
            {t(
              alreadyComparatedBranches
                ? 'section.two.title'
                : 'section.three.title'
            )}
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
            label={t('input.release.title.label')}
            icon={Edit3Icon}
            required
            disabled={!alreadyComparatedBranches}
            error={
              releaseForm.errors.title
                ? t(releaseForm.errors.title.message as any)
                : undefined
            }
            {...releaseForm.register('title')}
          />

          <Input
            id="version"
            type="text"
            label={t('input.release.version.label')}
            placeholder={t('input.release.version.placeholder')}
            icon={Code2Icon}
            required
            disabled={!alreadyComparatedBranches}
            error={
              releaseForm.errors.version
                ? t(releaseForm.errors.version.message as any)
                : undefined
            }
            {...releaseForm.register('version')}
          />

          <Input
            id="short-description"
            type="text"
            label={t('input.release.description.short.label')}
            placeholder={t('input.release.description.short.placeholder')}
            icon={MessageSquare}
            required
            disabled={!alreadyComparatedBranches}
            error={
              releaseForm.errors.shortDescription
                ? t(releaseForm.errors.shortDescription.message as any)
                : undefined
            }
            {...releaseForm.register('shortDescription')}
          />

          <Textarea
            id="full-description"
            label={t('input.release.description.full.label')}
            placeholder={t('input.release.description.full.placeholder')}
            icon={FileText}
            required
            disabled={!alreadyComparatedBranches}
            error={
              releaseForm.errors.fullDescription
                ? t(releaseForm.errors.fullDescription.message as any)
                : undefined
            }
            {...releaseForm.register('fullDescription')}
          />

          <Input
            id="availableAt"
            type="date"
            label={t('input.release.availableAt.label')}
            icon={Calendar}
            required
            min={currentDate}
            disabled={!alreadyComparatedBranches}
            error={
              releaseForm.errors.availableAt
                ? t(releaseForm.errors.availableAt.message as any)
                : undefined
            }
            {...releaseForm.register('availableAt')}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4">
          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-[184px]"
            disabled={
              !releaseForm.isValid || !alreadyComparatedBranches || isCreating
            }
          >
            {t(isCreating ? 'action.submitting' : 'action.submit')}
            <Button.Icon icon={Plus} loading={isCreating} />
          </Button>

          <Link
            href={`/dash/projects/${project.id}`}
            className="w-full md:w-[184px]"
          >
            <Button type="button" className="w-full">
              {t('action.cancel')}
              <Button.Icon icon={Trash2} />
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
