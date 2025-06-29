import Link from 'next/link';
import { Suspense } from 'react';
import { ChevronRight, Plus } from 'lucide-react';

import { SessionAbstract } from '@domain/entities';

import { formatDate, generateRandomUUID } from '@app/helpers';
import { fetchAllProjectsAction } from '@app/actions';

import { Button, IconButton, Table } from '@app/components/ui';

interface ListProps {
  session: SessionAbstract;
}

export default async function List({ session }: ListProps) {
  const { projects, success } = await fetchAllProjectsAction({
    userId: session.user.id,
  });

  if (!success) {
    return <section className="flex flex-col gap-4">Error</section>;
  }

  const columns = [
    { id: generateRandomUUID(), children: 'Nome' },
    { id: generateRandomUUID(), children: 'Descrição' },
    { id: generateRandomUUID(), children: 'Criação em' },
    { id: generateRandomUUID(), children: 'Última atualização em' },
    { id: generateRandomUUID(), children: 'Detalhes', center: true },
  ];

  return (
    <Suspense fallback={<section>Carregando...</section>}>
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
                <Table.Row id={project.id} isLast={isLast}>
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
    </Suspense>
  );
}
