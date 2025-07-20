import Link from 'next/link';
import { ExternalLink, Plus } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';

import { fetchAllReleasesAction } from '@app/actions';
import { formatDate } from '@app/helpers';

import { ErrorStatus } from '@app/components/common';
import { Button, IconButton, Table } from '@app/components/ui';

import { MobileRelease } from './components';

interface ListProps {
  columns: any;
  project: ProjectAbstract;
}

export default async function List({ columns, project }: ListProps) {
  const { releases } = await fetchAllReleasesAction({ projectId: project.id });

  if (!releases.length) {
    return (
      <ErrorStatus
        title="Oops... nothing found!"
        message="No releases were found. Try registering a new one by clicking the button below."
      >
        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button variant="primary">
            Add new release
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
          <h3 className="text-lg font-semibold">Release list</h3>
          <h4 className="text-text-secondary">
            Total releases: {releases.length}
          </h4>
        </div>

        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button>
            Add new release
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
                    {formatDate(release.createdAt, 'MMMM DD, YYYY')}
                  </Table.Data>
                  <Table.Data>
                    {formatDate(release.updatedAt, 'MMMM DD, YYYY')}
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
