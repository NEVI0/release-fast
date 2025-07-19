export interface SupportTicketAbstract {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: Date | string;
}

interface SupportTicketProps {
  id?: string;
  title: string;
  description: string;
  userId: string;
  createdAt?: Date | string;
}

export default class SupportTicket implements SupportTicketAbstract {
  public id: SupportTicketAbstract['id'];
  public title: SupportTicketAbstract['title'];
  public description: SupportTicketAbstract['description'];
  public userId: SupportTicketAbstract['userId'];
  public createdAt: SupportTicketAbstract['createdAt'];

  constructor(props: SupportTicketProps) {
    this.id = props.id ?? '';
    this.title = props.title;
    this.description = props.description;
    this.userId = props.userId;
    this.createdAt = props.createdAt ?? new Date();
  }
}
