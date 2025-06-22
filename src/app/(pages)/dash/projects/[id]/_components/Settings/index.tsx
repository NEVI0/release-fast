'use client';

import { useState } from 'react';

import { Edit3, Trash2 } from 'lucide-react';

import { Setting } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteProjectModal } from './components';

export default function Settings() {
  const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8">
        <h3 className="font-bold text-2xl">Configurações</h3>

        <ul className="flex flex-col gap-4">
          <li>
            <Setting
              title="Editar dados do projeto"
              description="Edite os dados do projeto"
            >
              <Button>
                Editar projeto <Edit3 className="size-5" />
              </Button>
            </Setting>
          </li>

          <li>
            <Setting
              title="Excluir projeto"
              description="Exclua o projeto e todos os seus dados (esta ação é irreversível)"
            >
              <Button
                variant="danger"
                onClick={() => setIsDeleteProjectModalOpen(true)}
              >
                Excluir projeto <Trash2 className="size-5" />
              </Button>
            </Setting>
          </li>
        </ul>
      </section>

      <DeleteProjectModal
        isOpen={isDeleteProjectModalOpen}
        onClose={() => setIsDeleteProjectModalOpen(false)}
      />
    </>
  );
}
