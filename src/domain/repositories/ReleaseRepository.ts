import { type ReleaseAbstract } from '@domain/entities';

export default interface ReleaseRepositoryAbstract {
  count(projectId: string): Promise<{ releases: number }>;

  findAll(projectId: string): Promise<ReleaseAbstract[]>;
  findById(id: string): Promise<ReleaseAbstract | null>;

  create(release: ReleaseAbstract): Promise<ReleaseAbstract>;
  update(release: ReleaseAbstract): Promise<ReleaseAbstract>;

  deleteById(id: string): Promise<void>;
}
