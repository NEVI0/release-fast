import { PlanType } from './Plan';

export interface UserAbstract {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  plan: PlanType;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProps {
  id?: string;
  name: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  plan?: PlanType;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class User implements UserAbstract {
  public id: UserAbstract['id'];
  public name: UserAbstract['name'];
  public email: UserAbstract['email'];
  public emailVerified?: UserAbstract['emailVerified'];
  public image: UserAbstract['image'];
  public plan: UserAbstract['plan'];
  public createdAt: UserAbstract['createdAt'];
  public updatedAt: UserAbstract['updatedAt'];

  constructor(props: UserProps) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.email = props.email;
    this.emailVerified = props.emailVerified;
    this.image = props.image;
    this.plan = props.plan ?? 'free';
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
