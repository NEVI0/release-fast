import { type ReleaseAbstract } from '@domain/entities';

export default interface ReleaseRepositoryAbstract {
  findAll(): Promise<ReleaseAbstract[]>;
  findById(id: string): Promise<ReleaseAbstract | null>;

  create(release: ReleaseAbstract): Promise<ReleaseAbstract>;
  update(release: ReleaseAbstract): Promise<ReleaseAbstract>;

  deleteById(id: string): Promise<void>;
}
