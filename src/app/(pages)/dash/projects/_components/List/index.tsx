import Link from 'next/link';
import { ChevronRight, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { UserAbstract } from '@domain/entities';

import { formatDate } from '@app/helpers';
import { fetchAllProjectsAction } from '@app/actions';

import { Button, IconButton, Table } from '@app/components/ui';
import { ErrorStatus } from '@app/components/common';

import { MobileProject } from './components';

interface ListProps {
  user: UserAbstract;
}

export default async function List({ user }: ListProps) {
  const t = useTranslations('page.projects');

  const { projects } = await fetchAllProjectsAction({
    userId: user.id,
  });

  if (!projects.length) {
    return (
      <ErrorStatus
        title={t('notFound.title')}
        message={t('notFound.description')}
      >
        <Link href="/dash/projects/create">
          <Button variant="primary">
            {t('action.create')}
            <Button.Icon icon={Plus} />
          </Button>
        </Link>
      </ErrorStatus>
    );
  }

  const columns = [
    { id: 'name', children: t('list.column.one') },
    { id: 'description', children: t('list.column.two') },
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
              total: projects.length,
              strong: (chunk) => (
                <strong className="font-semibold">{chunk}</strong>
              ),
            })}
          </h4>
        </div>

        <Link href="/dash/projects/create">
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
            {projects.map((project, index) => {
              const isLast = index === projects.length - 1;

              return (
                <Table.Row key={project.id} isLast={isLast}>
                  <Table.Data>{project.name}</Table.Data>
                  <Table.Data>{project.description}</Table.Data>
                  <Table.Data>
                    {formatDate(project.createdAt, 'MMMM DD, YYYY')}
                  </Table.Data>
                  <Table.Data>
                    {formatDate(project.updatedAt, 'MMMM DD, YYYY')}
                  </Table.Data>

                  <Table.Data>
                    <div className="flex items-center justify-center">
                      <Link href={`/dash/projects/${project.id}`}>
                        <IconButton icon={ChevronRight} />
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
          {projects.map((project) => (
            <li key={project.id}>
              <MobileProject project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
