'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { SessionAbstract } from '@domain/entities';

import { useToast } from '@app/hooks';
import { accessAccountAction, deleteUserByIdAction } from '@app/actions';

import { Button, IconButton, Input, Modal } from '@app/components/ui';

interface DeleteAccountModalProps {
  session: SessionAbstract;

  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteAccountModal({
  session,
  isOpen,
  onClose,
}: DeleteAccountModalProps) {
  const toast = useToast();
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteAccount(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(false);

      await deleteUserByIdAction({ id: session.user.id });
      toast.success(
        'Sua conta foi deletada com sucesso! Você será redirecionado dentro de 3 segundos...'
      );

      await new Promise((resolve) => setTimeout(resolve, 3000));
      accessAccountAction();
      router.replace('/');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Erro ao excluir a conta'
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
            <h3 className="text-2xl font-bold text-text-primary">
              Excluir conta
            </h3>

            <IconButton icon={X} onClick={onClose} />
          </div>

          <p className="text-text-secondary">
            Tem certeza que deseja excluir sua conta? Todos os dados serão
            deletados e está ação não pode ser desfeita.
          </p>

          <p className="text-text-secondary">
            Se sim, digite "Deletar" no campo abaixo.
          </p>
        </div>

        <form
          className="flex items-end gap-4 w-full"
          onSubmit={handleDeleteAccount}
        >
          <Input
            id="delete-account"
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
            {isLoading ? 'Excluindo...' : 'Excluir conta'}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
