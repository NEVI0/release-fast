export interface ReleaseAbstract {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  baseBranch: string;
  headBranch: string;
  projectId: string;
  availableAt: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface ReleaseProps {
  id?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  baseBranch: string;
  headBranch: string;
  projectId: string;
  availableAt: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default class Release implements ReleaseAbstract {
  public id: ReleaseAbstract['id'];
  public title: ReleaseAbstract['title'];
  public shortDescription: ReleaseAbstract['shortDescription'];
  public fullDescription: ReleaseAbstract['fullDescription'];
  public version: ReleaseAbstract['version'];
  public baseBranch: ReleaseAbstract['baseBranch'];
  public headBranch: ReleaseAbstract['headBranch'];
  public projectId: ReleaseAbstract['projectId'];
  public availableAt: ReleaseAbstract['availableAt'];
  public createdAt: ReleaseAbstract['createdAt'];
  public updatedAt: ReleaseAbstract['updatedAt'];

  constructor(props: ReleaseProps) {
    this.id = props.id ?? '';
    this.title = props.title;
    this.shortDescription = props.shortDescription;
    this.fullDescription = props.fullDescription;
    this.version = props.version;
    this.baseBranch = props.baseBranch;
    this.headBranch = props.headBranch;
    this.projectId = props.projectId;
    this.availableAt = props.availableAt ?? new Date();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
