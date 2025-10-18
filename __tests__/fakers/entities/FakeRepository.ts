import { faker } from '@faker-js/faker';

import { RepositoryAbstract } from '@domain/entities';

interface RepositoryProps {
  id?: string;
  name?: string;
  fullname?: string;
  isPrivate?: boolean; // "private" is a reserved word in JavaScript
  description?: string;
  url?: string;
}

export default class Repository implements RepositoryAbstract {
  public id: RepositoryAbstract['id'];
  public name: RepositoryAbstract['name'];
  public fullname: RepositoryAbstract['fullname'];
  public private: RepositoryAbstract['private'];
  public description: RepositoryAbstract['description'];
  public url: RepositoryAbstract['url'];

  constructor({
    id = faker.string.uuid(),
    name = faker.lorem.sentence(),
    fullname = faker.lorem.sentence(),
    isPrivate = faker.datatype.boolean(),
    description = faker.lorem.paragraph(),
    url = faker.internet.url(),
  }: RepositoryProps) {
    this.id = id;
    this.name = name;
    this.fullname = fullname;
    this.private = isPrivate;
    this.description = description;
    this.url = url;
  }
}
