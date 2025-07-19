export interface FeedbackAbstract {
  id: string;
  title: string;
  description: string;
  userId?: string;
  createdAt: Date | string;
}

interface FeedbackProps {
  id?: string;
  title: string;
  description: string;
  userId?: string;
  createdAt?: Date | string;
}

export default class Feedback implements FeedbackAbstract {
  public id: FeedbackAbstract['id'];
  public title: FeedbackAbstract['title'];
  public description: FeedbackAbstract['description'];
  public userId: FeedbackAbstract['userId'];
  public createdAt: FeedbackAbstract['createdAt'];

  constructor(props: FeedbackProps) {
    this.id = props.id ?? '';
    this.title = props.title;
    this.description = props.description;
    this.userId = props.userId;
    this.createdAt = props.createdAt ?? new Date();
  }
}
