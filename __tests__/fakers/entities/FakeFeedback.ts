import { faker } from '@faker-js/faker';

import { FeedbackAbstract } from '@domain/entities';

interface FeedbackProps {
  id?: string;
  title?: string;
  description?: string;
  userId?: string;
  createdAt?: Date | string;
}

export default class Feedback implements FeedbackAbstract {
  public id: FeedbackAbstract['id'];
  public title: FeedbackAbstract['title'];
  public description: FeedbackAbstract['description'];
  public userId: FeedbackAbstract['userId'];
  public createdAt: FeedbackAbstract['createdAt'];

  constructor({
    id = faker.string.uuid(),
    title = faker.lorem.sentence(),
    description = faker.lorem.paragraph(),
    userId = faker.string.uuid(),
    createdAt = faker.date.recent(),
  }: FeedbackProps) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.createdAt = createdAt;
  }
}
