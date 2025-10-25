import HttpProviderAbstract, {
  HttpProviderOptions,
  HttpProviderPayload,
} from '@domain/providers/HttpProvider';

export default class FakeHttpProvider implements HttpProviderAbstract {
  public get: HttpProviderAbstract['get'] = async <T>(
    _: string,
    __?: HttpProviderOptions
  ) => {
    return Promise.resolve(
      'This is a fake response from the HTTP provider'
    ) as Promise<T>;
  };

  public post: HttpProviderAbstract['post'] = async <T>(
    _: string,
    __: HttpProviderPayload,
    ___?: HttpProviderOptions
  ) => {
    return Promise.resolve(
      'This is a fake response from the HTTP provider'
    ) as Promise<T>;
  };

  public put: HttpProviderAbstract['put'] = async <T>(
    _: string,
    __: HttpProviderPayload,
    ___?: HttpProviderOptions
  ) => {
    return Promise.resolve(
      'This is a fake response from the HTTP provider'
    ) as Promise<T>;
  };

  public delete: HttpProviderAbstract['delete'] = async <T>(
    _: string,
    __?: HttpProviderOptions
  ) => {
    return Promise.resolve(
      'This is a fake response from the HTTP provider'
    ) as Promise<T>;
  };
}
