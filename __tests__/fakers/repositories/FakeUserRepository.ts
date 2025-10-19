import { UserAbstract } from '@domain/entities';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class FakeUserRepository implements UserRepositoryAbstract {
  private users: UserAbstract[] = [];

  public findById: UserRepositoryAbstract['findById'] = async (id) => {
    const user = this.users.find((user) => user.id === id);
    return Promise.resolve(user || null);
  };

  public findByPaymentId: UserRepositoryAbstract['findByPaymentId'] = async (
    id
  ) => {
    const user = this.users.find((user) => user.paymentId === id);
    return Promise.resolve(user || null);
  };

  public update: UserRepositoryAbstract['update'] = async (user) => {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index === -1) throw Error('User not found');

    this.users[index] = user;
    return Promise.resolve(user);
  };

  public updateByPaymentId: UserRepositoryAbstract['updateByPaymentId'] =
    async (user) => {
      const index = this.users.findIndex((u) => u.paymentId === user.paymentId);
      if (index === -1) throw Error('User not found');

      this.users[index] = user;
      return Promise.resolve(user);
    };

  public deleteById: UserRepositoryAbstract['deleteById'] = async (id) => {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw Error('User not found');

    this.users.splice(index, 1);
  };

  public mockUser(user: UserAbstract) {
    this.users.push(user);
  }
}
