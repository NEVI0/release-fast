import { faker } from '@faker-js/faker';

import { PaymentUserAbstract } from '@domain/entities';

interface PaymentUserProps {
  id?: string;
  name?: string;
  email?: string;
}

export default class PaymentUser implements PaymentUserAbstract {
  public id: PaymentUserAbstract['id'];
  public name: PaymentUserAbstract['name'];
  public email: PaymentUserAbstract['email'];

  constructor({
    id = faker.string.uuid(),
    name = faker.person.fullName(),
    email = faker.internet.email(),
  }: PaymentUserProps) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
