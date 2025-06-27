'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Code2Icon, MessageSquare, Plus } from 'lucide-react';

import { useToast } from '@app/hooks';
import { createProjectAction } from '@app/actions';
import { Button, Input, Select } from '@app/components/ui';

export default function Form() {
  const toast = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);

      const dto = {
        name: String(formData.get('name')),
        description: String(formData.get('description')),
        userId: 'user-id',
      };

      const { success, message } = await createProjectAction(dto);
      if (!success) throw new Error(message);

      toast.success('Projeto criado com sucesso');
      router.push('/dash/projects');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Erro ao criar projeto'
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          name="name"
          type="text"
          label="Nome do projeto"
          placeholder="Ex.: E-commerce, Blog, etc."
          icon={Box}
          required
        />

        <Input
          id="description"
          name="description"
          type="text"
          label="Descrição do projeto"
          placeholder="Uma breve descrição do projeto"
          icon={MessageSquare}
          required
        />

        <div className="flex items-center gap-4 w-full">
          <Select
            id="repository-type"
            label="Tipo de repositório"
            options={[
              { label: 'GitHub', value: 'github' },
              { label: 'GitLab', value: 'gitlab' },
            ]}
            className="w-[300px]"
            required
          />

          <Input
            id="url"
            name="url"
            type="text"
            label="URL do repositório do projeto"
            placeholder="Ex.: https://github.com/user/repo"
            icon={Code2Icon}
            className="w-full"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href="/dash/projects">
          <Button type="button" className="w-[184px]" disabled={isLoading}>
            Cancelar
          </Button>
        </Link>

        <Button
          type="submit"
          variant="primary"
          className="w-[184px]"
          disabled={isLoading}
        >
          {isLoading ? 'Criando...' : 'Criar projeto'}
          <Plus className="size-5" />
        </Button>
      </div>
    </form>
  );
}
