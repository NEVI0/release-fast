import { UserAbstract } from '@domain/entities';

export default interface UserRepositoryAbstract {
  findById(id: string): Promise<UserAbstract | null>;
  deleteById(id: string): Promise<void>;
}
