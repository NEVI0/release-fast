import { faker } from '@faker-js/faker/locale/en';

import { ProjectAbstract } from '@domain/entities';

interface ProjectProps {
  id?: string;
  name?: string;
  description?: string;
  userId?: string;

  repository?: {
    id: string;
    provider: string;
    name: string;
    url: string;
  };

  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default class Project implements ProjectAbstract {
  public id: ProjectAbstract['id'];
  public name: ProjectAbstract['name'];
  public description: ProjectAbstract['description'];
  public userId: ProjectAbstract['userId'];
  public repository: ProjectAbstract['repository'];
  public createdAt: ProjectAbstract['createdAt'];
  public updatedAt: ProjectAbstract['updatedAt'];

  constructor({
    id = faker.string.uuid(),
    name = faker.lorem.sentence(),
    description = faker.lorem.paragraph(),
    userId = faker.string.uuid(),
    repository = {
      id: faker.string.uuid(),
      provider: faker.helpers.arrayElement(['github', 'gitlab', 'bitbucket']),
      name: faker.lorem.sentence(),
      url: faker.internet.url(),
    },
    createdAt = faker.date.recent(),
    updatedAt = faker.date.soon(),
  }: ProjectProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.userId = userId;
    this.repository = repository;

    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
