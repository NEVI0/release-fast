import { faker } from '@faker-js/faker/locale/en';

import { PLAN_TYPES, UserAbstract } from '@domain/entities';
import { PlanType } from '@domain/entities';

interface UserProps {
  id?: string;
  name?: string;
  email?: string;
  emailVerified?: Date | '';
  image?: string;
  plan?: PlanType;
  paymentId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class User implements UserAbstract {
  public id: UserAbstract['id'];
  public name: UserAbstract['name'];
  public email: UserAbstract['email'];
  public emailVerified: UserAbstract['emailVerified'];
  public image: UserAbstract['image'];
  public plan: UserAbstract['plan'];
  public paymentId: UserAbstract['paymentId'];
  public createdAt: UserAbstract['createdAt'];
  public updatedAt: UserAbstract['updatedAt'];

  constructor({
    id = faker.string.uuid(),
    name = faker.person.fullName(),
    email = faker.internet.email(),
    emailVerified = faker.date.recent(),
    image = faker.image.url(),
    plan = faker.helpers.arrayElement(PLAN_TYPES),
    paymentId = faker.string.uuid(),
    createdAt = faker.date.recent(),
    updatedAt = faker.date.recent(),
  }: UserProps) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.emailVerified = emailVerified;
    this.image = image;
    this.plan = plan ?? 'free';
    this.paymentId = paymentId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
