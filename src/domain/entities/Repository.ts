export interface RepositoryAbstract {
  id: string;
  name: string;
  fullname: string;
  private: boolean;
  description?: string;
  url: string;
}

interface RepositoryProps extends RepositoryAbstract {}

export default class Repository implements RepositoryAbstract {
  public id: RepositoryAbstract['id'];
  public name: RepositoryAbstract['name'];
  public fullname: RepositoryAbstract['fullname'];
  public private: RepositoryAbstract['private'];
  public description: RepositoryAbstract['description'];
  public url: RepositoryAbstract['url'];

  constructor(props: RepositoryProps) {
    this.id = props.id;
    this.name = props.name;
    this.fullname = props.fullname;
    this.private = props.private;
    this.description = props.description;
    this.url = props.url;
  }
}
