'use client';

import { useState } from 'react';

import Link from 'next/link';
import { Edit3, Trash2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';

import { Setting } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteProjectModal } from './components';

interface SettingsProps {
  project: ProjectAbstract;
}

export default function Settings({ project }: SettingsProps) {
  const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8">
        <h3 className="font-bold text-2xl">Settings</h3>

        <ul className="flex flex-col gap-4">
          <li>
            <Setting
              title="Edit project data"
              description="Edit the project data"
            >
              <Link href={`/dash/projects/${project.id}/edit`}>
                <Button>
                  Edit project <Button.Icon icon={Edit3} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title="Delete project"
              description="Delete the project and all its data (this action is irreversible)"
            >
              <Button
                variant="danger"
                onClick={() => setIsDeleteProjectModalOpen(true)}
              >
                Delete project <Button.Icon icon={Trash2} />
              </Button>
            </Setting>
          </li>
        </ul>
      </section>

      <DeleteProjectModal
        project={project}
        isOpen={isDeleteProjectModalOpen}
        onClose={() => setIsDeleteProjectModalOpen(false)}
      />
    </>
  );
}
