import { ChevronRight, Plus } from 'lucide-react';

import { Button, IconButton } from '@app/components/ui';

import { concatClasses } from '@app/helpers';

export default function List() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Listagem de Projetos</h3>
          <h4 className="text-text-secondary">Total de projetos: 5</h4>
        </div>

        <Button>
          Adicionar novo projeto
          <Plus className="size-5" />
        </Button>
      </div>

      <div className="rounded-2xl border border-border  overflow-hidden">
        <table className="border-collapse w-full bg-container text-text-primary">
          <thead>
            <tr className="border-b border-border text-left h-[64px]">
              <th className="px-8">Nome</th>
              <th className="px-8">Descrição</th>
              <th className="px-8">Criado em</th>
              <th className="px-8">Versão atual</th>
              <th className="px-8">Status</th>
              <th className="px-8 w-[100px] text-center">Detalhes</th>
            </tr>
          </thead>

          <tbody>
            {new Array(5).fill(0).map((_, index) => {
              const isLast = index === 4;

              return (
                <tr
                  key={index}
                  className={concatClasses(
                    'text-left h-[64px]',
                    !isLast && 'border-b border-border'
                  )}
                >
                  <th className="font-normal px-8">Nome</th>
                  <th className="font-normal px-8">Descrição</th>
                  <th className="font-normal px-8">Criado em</th>
                  <th className="font-normal px-8">Versão atual</th>
                  <th className="font-normal px-8">Status</th>
                  <th className="font-normal px-8 w-[100px]">
                    <div className="flex items-center justify-center">
                      <IconButton icon={ChevronRight} />
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
