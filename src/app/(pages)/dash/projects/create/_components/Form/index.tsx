import Link from 'next/link';
import { Box, Code2Icon, MessageSquare, Plus } from 'lucide-react';

import { Button, Input, Select } from '@app/components/ui';

export default function Form() {
  return (
    <form action="#" className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          type="text"
          label="Nome do projeto"
          placeholder="Ex.: E-commerce, Blog, etc."
          icon={Box}
          required
        />

        <Input
          id="description"
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
          <Button type="button" className="w-[184px]">
            Cancelar
          </Button>
        </Link>

        <Button type="button" variant="primary" className="w-[184px]">
          Criar projeto
          <Plus className="size-5" />
        </Button>
      </div>
    </form>
  );
}
