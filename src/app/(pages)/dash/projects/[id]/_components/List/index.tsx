import Link from 'next/link';
import { ExternalLink, Plus } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { ProjectAbstract } from '@domain/entities';

import { fetchAllReleasesAction } from '@app/actions';
import { formatDate } from '@app/helpers';

import { ErrorStatus } from '@app/components/common';
import { Button, IconButton, Table } from '@app/components/ui';

import { MobileRelease } from './components';

interface ListProps {
  project: ProjectAbstract;
}

export default async function List({ project }: ListProps) {
  const t = useTranslations('page.project');
  const locale = useLocale();

  const { releases } = await fetchAllReleasesAction({ projectId: project.id });

  if (!releases.length) {
    return (
      <ErrorStatus
        title={t('notFound.title')}
        message={t('notFound.description')}
      >
        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button variant="primary">
            {t('action.create')}
            <Button.Icon icon={Plus} />
          </Button>
        </Link>
      </ErrorStatus>
    );
  }

  const columns = [
    { id: 'title', children: t('list.column.one') },
    { id: 'version', children: t('list.column.two') },
    { id: 'createdAt', children: t('list.column.three') },
    { id: 'updatedAt', children: t('list.column.four') },
    { id: 'details', children: t('list.column.five'), center: true },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{t('list.title')}</h3>

          <h4 className="text-text-secondary">
            {t.rich('list.subtitle', {
              total: releases.length,
              strong: (chunk) => (
                <strong className="font-semibold">{chunk}</strong>
              ),
            })}
          </h4>
        </div>

        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button>
            {t('action.create')}
            <Button.Icon icon={Plus} />
          </Button>
        </Link>
      </div>

      <div className="hidden md:block">
        <Table>
          <Table.Head columns={columns} />

          <Table.Body>
            {releases.map((release, index) => {
              const isLast = index === releases.length - 1;

              return (
                <Table.Row key={release.id} isLast={isLast}>
                  <Table.Data>{release.title}</Table.Data>
                  <Table.Data>{release.version}</Table.Data>
                  <Table.Data>
                    {formatDate(release.createdAt, locale)}
                  </Table.Data>
                  <Table.Data>
                    {formatDate(release.updatedAt, locale)}
                  </Table.Data>

                  <Table.Data>
                    <div className="flex items-center justify-center">
                      <Link
                        href={`/public/release/${release.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton icon={ExternalLink} />
                      </Link>
                    </div>
                  </Table.Data>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>

      <div className="block md:hidden">
        <ul className="flex flex-col gap-4">
          {releases.map((release) => (
            <li key={release.id}>
              <MobileRelease release={release} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
