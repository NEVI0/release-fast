import { ProjectAbstract } from '@domain/entities';
import { ProjectRepositoryAbstract } from '@domain/repositories';

export default class FakeProjectsRepository
  implements ProjectRepositoryAbstract
{
  private projects: ProjectAbstract[] = [];

  public count: ProjectRepositoryAbstract['count'] = async (userId) => {
    const projects = this.projects.filter(
      (project) => project.userId === userId
    );

    return Promise.resolve({ projects: projects.length });
  };

  public findAll: ProjectRepositoryAbstract['findAll'] = async (userId) => {
    const projects = this.projects.filter(
      (project) => project.userId === userId
    );

    return Promise.resolve(projects);
  };

  public findById: ProjectRepositoryAbstract['findById'] = async (id) => {
    const project = this.projects.find((project) => project.id === id);
    return Promise.resolve(project || null);
  };

  public create: ProjectRepositoryAbstract['create'] = async (project) => {
    this.projects.push(project);
    return Promise.resolve(project);
  };

  public update: ProjectRepositoryAbstract['update'] = async (project) => {
    const index = this.projects.findIndex((proj) => proj.id === project.id);
    if (index === -1) throw Error('Project not found');

    this.projects[index] = project;
    return Promise.resolve(project);
  };

  public deleteById: ProjectRepositoryAbstract['deleteById'] = async (id) => {
    const index = this.projects.findIndex((project) => project.id === id);
    if (index === -1) throw Error('Project not found');

    this.projects.splice(index, 1);
  };

  public mockProject(project: ProjectAbstract) {
    this.projects.push(project);
  }
}
