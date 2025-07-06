export interface ProjectAbstract {
  id: string;
  name: string;
  description: string;
  userId: string;
  repository: string;
  repositoryUrl: string;
  provider: string;

  createdAt: Date | string;
  updatedAt: Date | string;
}

interface ProjectProps {
  id?: string;
  name: string;
  description: string;
  userId: string;
  repository: string;
  repositoryUrl: string;
  provider: string;

  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default class Project implements ProjectAbstract {
  public id: ProjectAbstract['id'];
  public name: ProjectAbstract['name'];
  public description: ProjectAbstract['description'];
  public userId: ProjectAbstract['userId'];
  public repository: ProjectAbstract['repository'];
  public repositoryUrl: ProjectAbstract['repositoryUrl'];
  public provider: ProjectAbstract['provider'];
  public createdAt: ProjectAbstract['createdAt'];
  public updatedAt: ProjectAbstract['updatedAt'];

  constructor(props: ProjectProps) {
    this.id = props.id ?? '';
    this.name = props.name;
    this.description = props.description;
    this.userId = props.userId;
    this.repository = props.repository;
    this.repositoryUrl = props.repositoryUrl;
    this.provider = props.provider;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
