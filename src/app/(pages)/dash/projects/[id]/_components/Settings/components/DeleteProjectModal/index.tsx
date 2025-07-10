'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { X } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';
import { deleteProjectByIdAction } from '@app/actions';
import { useToast } from '@app/hooks';
import { wait } from '@app/helpers';

import { Button, IconButton, Input, Modal } from '@app/components/ui';

interface DeleteProjectModalProps {
  project: ProjectAbstract;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteProjectModal({
  project,
  isOpen,
  onClose,
}: DeleteProjectModalProps) {
  const toast = useToast();
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteProject(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(false);

      await deleteProjectByIdAction({ id: project.id });
      toast.success(
        'Projeto deletado com sucesso! Você será redirecionado dentro de 3 segundos...'
      );

      await wait(3000);
      router.replace('/dash/projects');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Erro ao excluir o projeto'
      );

      setPassword('');
    } finally {
      setIsLoading(false);
    }
  }

  const isDeleteButtonDisabled = password !== 'Deletar';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center gap-8 bg-container border border-border p-8 rounded-4xl w-[85%] md:w-[500px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl text-text-primary font-bold">
              Excluir projeto
            </h3>

            <IconButton icon={X} onClick={onClose} />
          </div>

          <p className="text-text-secondary">
            Tem certeza que deseja excluir seu projeto? Todos os dados serão
            deletados e está ação não pode ser desfeita.
          </p>

          <p className="text-text-secondary">
            Se sim, digite "Deletar" no campo abaixo.
          </p>
        </div>

        <form
          className="flex items-end gap-4 w-full"
          onSubmit={handleDeleteProject}
        >
          <Input
            id="delete-project"
            placeholder={`Digite "Deletar" para confirmar`}
            className="w-full"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            variant="danger"
            disabled={isDeleteButtonDisabled || isLoading}
          >
            {isLoading ? 'Excluindo projeto...' : 'Excluir projeto'}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
