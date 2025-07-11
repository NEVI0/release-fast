'use client';

import { useState } from 'react';
import { Edit3, ExternalLink, Lock, Trash2 } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import { Setting, ThemeToggle } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteAccountModal } from './components';

interface SettingsProps {
  user: UserAbstract;
}

export default function Settings({ user }: SettingsProps) {
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8">
        <h3 className="font-bold text-2xl">Configurações</h3>

        <ul className="flex flex-col gap-4">
          <li>
            <Setting
              title="Mudar tema"
              description="Alternar entre tema claro e escuro"
            >
              <ThemeToggle />
            </Setting>
          </li>

          <li>
            <Setting
              title="Editar minha conta"
              description="Edite os dados da sua conta (nome, e-mail, etc.)"
            >
              <Button>
                Editar conta <Button.Icon icon={Edit3} />
              </Button>
            </Setting>
          </li>

          <li>
            <Setting
              title="Planos e assinaturas"
              description="Gerencie seus planos e assinaturas"
            >
              <Button>
                Gerenciar planos <Button.Icon icon={ExternalLink} />
              </Button>
            </Setting>
          </li>

          <li>
            <Setting
              title="Excluir conta"
              description="Exclua sua conta e todos os seus dados (esta ação é irreversível)"
            >
              <Button
                variant="danger"
                onClick={() => setIsDeleteAccountModalOpen(true)}
              >
                Excluir conta <Button.Icon icon={Trash2} />
              </Button>
            </Setting>
          </li>
        </ul>
      </section>

      <DeleteAccountModal
        user={user}
        isOpen={isDeleteAccountModalOpen}
        onClose={() => setIsDeleteAccountModalOpen(false)}
      />
    </>
  );
}
