import { type ProjectAbstract } from '@domain/entities';

export default interface ProjectRepositoryAbstract {
  findAll(): Promise<ProjectAbstract[]>;
  findById(id: string): Promise<ProjectAbstract | null>;

  create(project: ProjectAbstract): Promise<ProjectAbstract>;
  update(project: ProjectAbstract): Promise<ProjectAbstract>;

  deleteById(id: string): Promise<void>;
}
