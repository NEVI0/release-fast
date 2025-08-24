import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ProjectAbstract } from '@domain/entities';
import { Button, Skeleton, Table } from '@app/components/ui';

interface LoadingListProps {
  project: ProjectAbstract;
}

export default function LoadingList({ project }: LoadingListProps) {
  const t = useTranslations('page.project');

  const mock = new Array(6).fill(0);

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
              total: '0',
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

      <Table>
        <Table.Head columns={columns} />

        <Table.Body>
          {mock.map((_, index) => {
            const isLast = index === mock.length - 1;

            return (
              <Table.Row key={index} isLast={isLast}>
                <Table.Data>
                  <Skeleton className="h-[24px] w-[88px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <Skeleton className="h-[24px] w-[88px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <Skeleton className="h-[24px] w-[100px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <Skeleton className="h-[24px] w-[100px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <div className="flex items-center justify-center">
                    <Skeleton className="h-[24px] w-[100px] rounded-lg" />
                  </div>
                </Table.Data>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </section>
  );
}
