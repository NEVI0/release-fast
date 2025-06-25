export interface ProjectAbstract {
  id: string;
  name: string;
  description: string;
  userId: string;

  createdAt: Date;
  updatedAt: Date;
}

interface ProjectProps {
  id: string;
  name: string;
  description: string;
  userId: string;

  createdAt: Date;
  updatedAt: Date;
}

export default class Project implements ProjectAbstract {
  public id: ProjectAbstract['id'];
  public name: ProjectAbstract['name'];
  public description: ProjectAbstract['description'];
  public userId: ProjectAbstract['userId'];
  public createdAt: ProjectAbstract['createdAt'];
  public updatedAt: ProjectAbstract['updatedAt'];

  constructor(props: ProjectProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
