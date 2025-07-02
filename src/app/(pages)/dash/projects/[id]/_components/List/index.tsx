import Link from 'next/link';
import { Edit3, ExternalLink, Plus } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { concatClasses } from '@app/helpers';

import { Button, IconButton } from '@app/components/ui';

interface ListProps {
  project: ProjectAbstract;
}

export default function List({ project }: ListProps) {
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

      <div className="rounded-2xl border border-border overflow-hidden">
        <table className="border-collapse w-full bg-container text-text-primary">
          <thead>
            <tr className="border-b border-border text-left h-[64px]">
              <th className="px-8">Versão</th>
              <th className="px-8">Descrição</th>
              <th className="px-8">Criado em</th>
              <th className="px-8 text-center w-[144px] text-nowrap">Editar</th>
              <th className="px-8 text-center w-[144px] text-nowrap">
                Link público
              </th>
            </tr>
          </thead>

          <tbody>
            {new Array(5).fill(0).map((_, index) => {
              const isLast = index === 4;

              return (
                <tr
                  key={index}
                  className={concatClasses(
                    'text-left h-[64px] hover:bg-border/20 transition-colors',
                    !isLast && 'border-b border-border'
                  )}
                >
                  <th className="font-normal px-8">Nome</th>
                  <th className="font-normal px-8">Descrição</th>
                  <th className="font-normal px-8">Criado em</th>

                  <th className="font-normal px-8 w-[144px]">
                    <div className="flex items-center justify-center">
                      <Link href="/">
                        <IconButton icon={Edit3} />
                      </Link>
                    </div>
                  </th>

                  <th className="font-normal px-8 w-[144px]">
                    <div className="flex items-center justify-center">
                      <Link href="/public/project/1/version/1">
                        <IconButton icon={ExternalLink} />
                      </Link>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
