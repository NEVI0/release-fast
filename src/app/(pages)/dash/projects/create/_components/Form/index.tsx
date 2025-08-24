'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Box, MessageSquare, Plus, Search, Trash2 } from 'lucide-react';

import { RepositoryAbstract, SessionAbstract } from '@domain/entities';
import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';

import {
  createProjectValidationSchema,
  CreateProjectValidationSchema,
} from '@app/validations';
import { handleError } from '@app/helpers';
import { createProjectAction } from '@app/actions';
import { useForm, useToast } from '@app/hooks';
import { useFetchRepositories } from './hooks';

import { Button, HorizontalDivider, Input } from '@app/components/ui';
import { Repository } from './components';

interface FormProps {
  session: SessionAbstract;
}

export default function Form({ session }: FormProps) {
  const t = useTranslations('page.createProject');

  const toast = useToast();
  const router = useRouter();
  const form = useForm<CreateProjectValidationSchema>({
    schema: createProjectValidationSchema,
  });

  const selectedRepositoryId = form.watch('repositoryId');

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { repositories } = useFetchRepositories({
    provider: session.provider,
    token: session.token,
    user:
      session.provider === 'gitlab' ? session.user.name : session.user.username,
    search,
  });

  function handleSelectRepository(repository: RepositoryAbstract) {
    form.setValue('repositoryId', repository.id);
    form.setValue('repositoryName', repository.fullname);
    form.setValue('repositoryUrl', repository.url);

    form.trigger();
  }

  async function handleSubmit(data: CreateProjectValidationSchema) {
    try {
      setIsLoading(true);

      const { project } = await createProjectAction({
        name: data.name,
        description: data.description,
        userId: session.user.id,
        repository: {
          id: data.repositoryId,
          name: data.repositoryName,
          url: data.repositoryUrl,
          provider: session.provider,
        },
      });

      if (!project) throw new Error(t('toast.error'));

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
          error={form.errors.name?.message}
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
          error={form.errors.description?.message}
          {...form.register('description')}
        />

        <Input
          id="search"
          type="text"
          label={t('input.search.label')}
          icon={Search}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <input hidden disabled {...form.register('repositoryId')} />
        <input hidden disabled {...form.register('repositoryName')} />
        <input hidden disabled {...form.register('repositoryUrl')} />
      </div>

      <HorizontalDivider />

      {!!repositories.length ? (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">
            {t('repository.title.select')}
          </h3>

          <ul className="flex flex-col gap-2">
            {repositories.map((repository) => (
              <li key={repository.id}>
                <Repository
                  repository={repository}
                  selected={selectedRepositoryId === repository.id}
                  onSelect={() => handleSelectRepository(repository)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">
            {t('repository.title.notFound')}
          </h3>
        </div>
      )}

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

        <Link href="/dash/projects" className="w-full md:w-[184px]">
          <Button type="button" className="w-full" disabled={isLoading}>
            {t('action.cancel')}
            <Button.Icon icon={Trash2} />
          </Button>
        </Link>
      </div>
    </form>
  );
}
