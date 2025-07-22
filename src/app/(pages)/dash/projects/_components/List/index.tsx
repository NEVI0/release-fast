import Link from 'next/link';
import { ChevronRight, Plus } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import { formatDate } from '@app/helpers';
import { fetchAllProjectsAction } from '@app/actions';

import { Button, IconButton, Table } from '@app/components/ui';
import { ErrorStatus } from '@app/components/common';

import { MobileProject } from './components';

interface ListProps {
  user: UserAbstract;
  columns: any;
}

export default async function List({ user, columns }: ListProps) {
  const { projects } = await fetchAllProjectsAction({
    userId: user.id,
  });

  if (!projects.length) {
    return (
      <ErrorStatus
        title="Oops... nothing found!"
        message="No projects were found. Try registering a new one by clicking the button below."
      >
        <Link href="/dash/projects/create">
          <Button variant="primary">
            Add new project
            <Button.Icon icon={Plus} />
          </Button>
        </Link>
      </ErrorStatus>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Project list</h3>

          <h4 className="text-text-secondary">
            Total projects: {projects.length}
          </h4>
        </div>

        <Link href="/dash/projects/create">
          <Button>
            Add new project
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
