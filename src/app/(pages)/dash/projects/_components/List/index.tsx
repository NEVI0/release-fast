import Link from 'next/link';
import { ChevronRight, Plus } from 'lucide-react';

import { SessionAbstract } from '@domain/entities';

import { formatDate } from '@app/helpers';
import { fetchAllProjectsAction } from '@app/actions';

import { Button, IconButton, Table } from '@app/components/ui';
import { ErrorStatus } from '@app/components/common';

interface ListProps {
  session: SessionAbstract;
  columns: any;
}

export default async function List({ session, columns }: ListProps) {
  const { projects } = await fetchAllProjectsAction({
    userId: session.user.id,
  });

  if (!projects.length) {
    return (
      <ErrorStatus
        title="Ops... nada encontrado!"
        message="Não foi encontrado nenhum projeto cadastrado. Tente cadastrar um novo clicando no botão abaixo."
      >
        <Link href="/dash/projects/create">
          <Button variant="primary">
            Adicionar novo projeto
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
          <h3 className="text-lg font-semibold">Listagem de projetos</h3>

          <h4 className="text-text-secondary">
            Total de projetos: {projects.length}
          </h4>
        </div>

        <Link href="/dash/projects/create">
          <Button>
            Adicionar novo projeto
            <Plus className="size-5" />
          </Button>
        </Link>
      </div>

      <Table>
        <Table.Head columns={columns} />

        <Table.Body>
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;

            return (
              <Table.Row key={project.id} isLast={isLast}>
                <Table.Data>{project.name}</Table.Data>
                <Table.Data>{project.description}</Table.Data>
                <Table.Data>{formatDate(project.createdAt)}</Table.Data>
                <Table.Data>{formatDate(project.updatedAt)}</Table.Data>

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
    </section>
  );
}
