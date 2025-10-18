import { faker } from '@faker-js/faker';

import { RepoBranchRepositoryAbstract } from '@domain/repositories';

export default class FakeRepoBranchRepository
  implements RepoBranchRepositoryAbstract
{
  public compare: RepoBranchRepositoryAbstract['compare'] = async () => {
    return Promise.resolve(faker.string.nanoid());
  };
}
