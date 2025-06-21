'use client';

import { useState } from 'react';

import { X } from 'lucide-react';

import { Button, IconButton, Input, Modal } from '@app/components/ui';

interface DeleteProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteProjectModal({
  isOpen,
  onClose,
}: DeleteProjectModalProps) {
  const [password, setPassword] = useState('');

  const isDeleteButtonDisabled = password !== 'Deletar';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center gap-8 bg-container border border-border p-8 rounded-4xl w-[85%] md:w-[500px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl font-bold">Excluir projeto</h3>

            <IconButton icon={X} onClick={onClose} />
          </div>

          <p className="text-gray-600">
            Tem certeza que deseja excluir seu projeto? Todos os dados serão
            deletados e está ação não pode ser desfeita.
          </p>

          <p className="text-gray-600">
            Se sim, digite "Deletar" no campo abaixo.
          </p>
        </div>

        <form className="flex items-end gap-4 w-full">
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
            disabled={isDeleteButtonDisabled}
          >
            Excluir projeto
          </Button>
        </form>
      </div>
    </Modal>
  );
}
