'use client';

import Link from 'next/link';
import { Lock } from 'lucide-react';

import { RepositoryAbstract } from '@domain/entities';

interface RepositoryProps {
  repository: RepositoryAbstract;

  selected: boolean;
  onSelect: () => void;
}

export default function Repository({
  repository,
  selected,
  onSelect,
}: RepositoryProps) {
  return (
    <button
      type="button"
      className="cursor-pointer bg-container border border-border rounded-2xl px-6 py-4 flex items-center justify-between w-full transition-colors hover:border-border-action focus:border-border-action"
      onClick={onSelect}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{repository.name}</p>
          {repository.private && <Lock className="size-4 text-primary" />}
        </div>

        <Link href={repository.url} target="_blank" rel="noopener noreferrer">
          <small className="text-sm text-text-secondary hover:underline focus:underline">
            {repository.url}
          </small>
        </Link>
      </div>

      <div className="flex items-center justify-center size-[24px] rounded-full bg-container border border-border">
        {selected && <div className="size-[16px] rounded-full bg-primary" />}
      </div>
    </button>
  );
}
