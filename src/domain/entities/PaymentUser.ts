export interface PaymentUserAbstract {
  id: string;
  name: string;
  email: string;
}

interface PaymentUserProps extends PaymentUserAbstract {}

export default class PaymentUser implements PaymentUserAbstract {
  public id: PaymentUserAbstract['id'];
  public name: PaymentUserAbstract['name'];
  public email: PaymentUserAbstract['email'];

  constructor(props: PaymentUserProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
  }
}
