import { UserAbstract } from '@domain/entities';

export default interface UserRepositoryAbstract {
  findById(id: string): Promise<UserAbstract | null>;
  update(user: UserAbstract): Promise<UserAbstract>;
  deleteById(id: string): Promise<void>;
}
