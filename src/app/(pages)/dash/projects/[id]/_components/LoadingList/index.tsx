import Link from 'next/link';
import { Plus } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { Button, Skeleton, Table } from '@app/components/ui';

interface LoadingListProps {
  columns: any;
  project: ProjectAbstract;
}

export default function LoadingList({ columns, project }: LoadingListProps) {
  const mock = new Array(6).fill(0);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Release list</h3>

          <h4 className="text-text-secondary">
            Total releases:{' '}
            <strong className="font-semibold">loading...</strong>
          </h4>
        </div>

        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button>
            Add new release
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
