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
        'Project deleted successfully! You will be redirected in 3 seconds...'
      );

      await wait(3000);
      router.replace('/dash/projects');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Error deleting the project'
      );

      setPassword('');
    } finally {
      setIsLoading(false);
    }
  }

  const isDeleteButtonDisabled = password !== 'Delete';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="items-end md:items-center md:justify-center"
    >
      <div className="flex flex-col items-center gap-8 bg-container border border-border p-8 rounded-t-4xl md:rounded-b-4xl w-full md:w-[500px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl text-text-primary font-bold">
              Delete project
            </h3>

            <IconButton icon={X} onClick={onClose} />
          </div>

          <p className="text-text-secondary">
            Are you sure you want to delete your project? All data will be
            deleted and this action cannot be undone.
          </p>

          <p className="text-text-secondary">
            If so, type "Delete" in the field below.
          </p>
        </div>

        <form
          className="flex flex-col md:flex-row items-end gap-4 w-full"
          onSubmit={handleDeleteProject}
        >
          <Input
            id="delete-project"
            placeholder={`Type "Delete" to confirm`}
            className="w-full"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            variant="danger"
            className="w-full"
            disabled={isDeleteButtonDisabled || isLoading}
          >
            {isLoading ? 'Deleting project...' : 'Delete project'}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
