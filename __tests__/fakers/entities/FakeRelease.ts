import { faker } from '@faker-js/faker/locale/en';

import { ReleaseAbstract } from '@domain/entities';

interface ReleaseProps {
  id?: string;
  title?: string;
  shortDescription?: string;
  fullDescription?: string;
  version?: string;
  baseBranch?: string;
  headBranch?: string;
  projectId?: string;
  availableAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default class Release implements ReleaseAbstract {
  public id: ReleaseAbstract['id'];
  public title: ReleaseAbstract['title'];
  public shortDescription: ReleaseAbstract['shortDescription'];
  public fullDescription: ReleaseAbstract['fullDescription'];
  public version: ReleaseAbstract['version'];
  public baseBranch: ReleaseAbstract['baseBranch'];
  public headBranch: ReleaseAbstract['headBranch'];
  public projectId: ReleaseAbstract['projectId'];
  public availableAt: ReleaseAbstract['availableAt'];
  public createdAt: ReleaseAbstract['createdAt'];
  public updatedAt: ReleaseAbstract['updatedAt'];

  constructor({
    id = faker.string.uuid(),
    title = faker.lorem.sentence(),
    shortDescription = faker.lorem.paragraph(),
    fullDescription = faker.lorem.paragraph(),
    version = faker.string.uuid(),
    baseBranch = faker.string.uuid(),
    headBranch = faker.string.uuid(),
    projectId = faker.string.uuid(),
    availableAt = faker.date.recent(),
    createdAt = faker.date.recent(),
    updatedAt = faker.date.recent(),
  }: ReleaseProps) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.version = version;
    this.baseBranch = baseBranch;
    this.headBranch = headBranch;
    this.projectId = projectId;
    this.availableAt = availableAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
