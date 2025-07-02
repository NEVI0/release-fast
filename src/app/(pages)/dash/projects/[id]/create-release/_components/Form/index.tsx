import Link from 'next/link';
import { Code2Icon, FileText, MessageSquare, Plus } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';

import { Button, Input, Textarea } from '@app/components/ui';
import { GenerateWithIAButton } from './components';

interface FormProps {
  project: ProjectAbstract;
}

export default function Form({ project }: FormProps) {
  return (
    <form action="#" className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Input
          id="version"
          type="text"
          label="Versão"
          placeholder="Ex.: v1.0.0"
          icon={Code2Icon}
          required
        />

        <Input
          id="short-description"
          type="text"
          label="Descrição breve"
          placeholder="Uma breve descrição da release"
          rightButton={<GenerateWithIAButton />}
          icon={MessageSquare}
          required
        />

        <Textarea
          id="description"
          label="Descrição detalhada da sua release para o usuário final"
          placeholder="Uma descrição mais detalhada da release"
          rightButton={<GenerateWithIAButton />}
          icon={FileText}
          required
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href={`/dash/projects/${project.id}`}>
          <Button type="button" className="w-[184px]">
            Cancelar
          </Button>
        </Link>

        <Button type="button" variant="primary" className="w-[184px]">
          Criar release
          <Plus className="size-5" />
        </Button>
      </div>
    </form>
  );
}
