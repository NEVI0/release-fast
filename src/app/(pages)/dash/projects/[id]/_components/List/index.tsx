import Link from 'next/link';
import { Edit3, ExternalLink, Plus } from 'lucide-react';

import { ProjectAbstract, ReleaseAbstract } from '@domain/entities';
import { formatDate } from '@app/helpers';

import { ErrorStatus } from '@app/components/common';
import { Button, IconButton, Table } from '@app/components/ui';

interface ListProps {
  columns: any;
  project: ProjectAbstract;
  releases: ReleaseAbstract[];
}

export default function List({ columns, project, releases }: ListProps) {
  if (!releases.length) {
    return (
      <ErrorStatus
        title="Ops... nada encontrado!"
        message="Não foi encontrado nenhuma release. Tente cadastrar uma nova clicando no botão abaixo."
      >
        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button variant="primary">
            Adicionar nova release
            <Plus className="size-5" />
          </Button>
        </Link>
      </ErrorStatus>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Listagem de versões</h3>
          <h4 className="text-text-secondary">Total de versões: 5</h4>
        </div>

        <Link href={`/dash/projects/${project.id}/create-release`}>
          <Button>
            Adicionar nova release
            <Plus className="size-5" />
          </Button>
        </Link>
      </div>

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
                  {formatDate(release.createdAt, 'DD of MMMM of YYYY')}
                </Table.Data>
                <Table.Data>
                  {formatDate(release.updatedAt, 'DD of MMMM of YYYY')}
                </Table.Data>

                <Table.Data>
                  <div className="flex items-center justify-center">
                    <Link href="">
                      <IconButton icon={Edit3} />
                    </Link>
                  </div>
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
    </section>
  );
}
