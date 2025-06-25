export interface ReleaseAbstract {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  projectId: string;

  createdAt: Date;
  updatedAt: Date;
}

interface ReleaseProps {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  projectId: string;

  createdAt: Date;
  updatedAt: Date;
}

export default class Release implements ReleaseAbstract {
  public id: ReleaseAbstract['id'];
  public title: ReleaseAbstract['title'];
  public shortDescription: ReleaseAbstract['shortDescription'];
  public fullDescription: ReleaseAbstract['fullDescription'];
  public version: ReleaseAbstract['version'];
  public projectId: ReleaseAbstract['projectId'];
  public createdAt: ReleaseAbstract['createdAt'];
  public updatedAt: ReleaseAbstract['updatedAt'];

  constructor(props: ReleaseProps) {
    this.id = props.id;
    this.title = props.title;
    this.shortDescription = props.shortDescription;
    this.fullDescription = props.fullDescription;
    this.version = props.version;
    this.projectId = props.projectId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
