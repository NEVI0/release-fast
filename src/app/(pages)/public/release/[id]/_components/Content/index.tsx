import { ReleaseAbstract } from '@domain/entities';

interface ContentProps {
  release: ReleaseAbstract | null;
}

export default function Content({ release }: ContentProps) {
  if (!release) return <p>nada</p>;

  return <p>{release.id}</p>;
}
