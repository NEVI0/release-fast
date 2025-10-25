import { faker } from '@faker-js/faker/locale/en';

import { SupportTicketAbstract } from '@domain/entities';

interface SupportTicketProps {
  id?: string;
  title?: string;
  description?: string;
  userId?: string;
  createdAt?: Date | string;
}

export default class SupportTicket implements SupportTicketAbstract {
  public id: SupportTicketAbstract['id'];
  public title: SupportTicketAbstract['title'];
  public description: SupportTicketAbstract['description'];
  public userId: SupportTicketAbstract['userId'];
  public createdAt: SupportTicketAbstract['createdAt'];

  constructor({
    id = faker.string.uuid(),
    title = faker.lorem.sentence(),
    description = faker.lorem.paragraph(),
    userId = faker.string.uuid(),
    createdAt = faker.date.recent(),
  }: SupportTicketProps) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.createdAt = createdAt;
  }
}
