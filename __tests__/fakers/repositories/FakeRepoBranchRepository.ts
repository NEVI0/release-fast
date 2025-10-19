import { faker } from '@faker-js/faker/locale/en';

import { RepoBranchRepositoryAbstract } from '@domain/repositories';

export default class FakeRepoBranchRepository
  implements RepoBranchRepositoryAbstract
{
  public compare: RepoBranchRepositoryAbstract['compare'] = async () => {
    return Promise.resolve(faker.string.nanoid());
  };
}
