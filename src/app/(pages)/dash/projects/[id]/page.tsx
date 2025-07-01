import Link from 'next/link';
import { Plus } from 'lucide-react';

import { fetchProjectByIdAction } from '@app/actions';

import { ErrorStatus } from '@app/components/common';
import { Button, HorizontalDivider } from '@app/components/ui';

import { Cards, Header, List, Settings } from './_components';

interface Params {
  id: string;
}

interface ProjectPageProps {
  params: Promise<Params>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const { project } = await fetchProjectByIdAction({ id });

  if (!project) {
    return (
      <ErrorStatus
        title="Ops... nada encontrado!"
        message="Não foi encontrado o projeto cadastrado. Tente cadastrar um novo clicando no botão abaixo."
      >
        <Link href="/dash/projects/create">
          <Button variant="primary">
            Adicionar novo projeto
            <Plus className="size-5" />
          </Button>
        </Link>
      </ErrorStatus>
    );
  }

  return (
    <>
      <Header project={project} />
      <Cards project={project} />
      <List project={project} />
      <HorizontalDivider />
      <Settings project={project} />
    </>
  );
}
