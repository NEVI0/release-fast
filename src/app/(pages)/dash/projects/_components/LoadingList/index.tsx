import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';

import { Button, Skeleton, Table } from '@app/components/ui';

export default function LoadingList() {
  const t = useTranslations('page.projects');
  const mock = new Array(6).fill(0);

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
              total: '0',
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

      <Table>
        <Table.Head columns={columns} />

        <Table.Body>
          {mock.map((_, index) => {
            const isLast = index === mock.length - 1;

            return (
              <Table.Row key={index} isLast={isLast}>
                <Table.Data>
                  <Skeleton className="h-[24px] w-[100px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <Skeleton className="h-[24px] w-[300px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <Skeleton className="h-[24px] w-[124px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <Skeleton className="h-[24px] w-[124px] rounded-lg" />
                </Table.Data>

                <Table.Data>
                  <div className="flex items-center justify-center">
                    <Skeleton className="h-[24px] w-[48px] rounded-lg" />
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
