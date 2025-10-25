import { ReleaseAbstract } from '@domain/entities';
import { ReleaseRepositoryAbstract } from '@domain/repositories';

export default class FakeReleaseRepository
  implements ReleaseRepositoryAbstract
{
  private releases: ReleaseAbstract[] = [];

  public count: ReleaseRepositoryAbstract['count'] = async (projectId) => {
    const releases = this.releases.filter(
      (release) => release.projectId === projectId
    );

    return Promise.resolve({ releases: releases.length });
  };

  public findAll: ReleaseRepositoryAbstract['findAll'] = async (projectId) => {
    const releases = this.releases.filter(
      (release) => release.projectId === projectId
    );

    return Promise.resolve(releases);
  };

  public findById: ReleaseRepositoryAbstract['findById'] = async (id) => {
    const release = this.releases.find((release) => release.id === id);
    return Promise.resolve(release || null);
  };

  public create: ReleaseRepositoryAbstract['create'] = async (project) => {
    this.releases.push(project);
    return Promise.resolve(project);
  };

  public update: ReleaseRepositoryAbstract['update'] = async (release) => {
    const index = this.releases.findIndex((relea) => relea.id === release.id);
    if (index === -1) throw Error('Release not found');

    this.releases[index] = release;
    return Promise.resolve(release);
  };

  public deleteById: ReleaseRepositoryAbstract['deleteById'] = async (id) => {
    const index = this.releases.findIndex((release) => release.id === id);
    if (index === -1) throw Error('Release not found');

    this.releases.splice(index, 1);
  };

  public mockRelease(release: ReleaseAbstract) {
    this.releases.push(release);
  }
}
