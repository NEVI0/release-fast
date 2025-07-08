import type {
  HttpProviderAbstract,
  HttpProviderOptions,
  HttpProviderPayload,
} from '@domain/providers';

export default class FetchHttpProvider implements HttpProviderAbstract {
  private baseUrl: string = '';
  private headers: HttpProviderOptions['headers'] = {};

  constructor(baseUrl: string, headers?: HttpProviderOptions['headers']) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  public get: HttpProviderAbstract['get'] = async <T>(
    url: string,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url, options?.params), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(this.headers && { ...this.headers }),
        ...(options?.headers && { ...options?.headers }),
      },
    });

    const response = await (options?.responseAsText
      ? request.text()
      : request.json());

    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  public post: HttpProviderAbstract['post'] = async <T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url, options?.params), {
      ...(options && { ...options }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.headers && { ...this.headers }),
        ...(options?.headers && { ...options?.headers }),
      },
      body: JSON.stringify(body),
    });

    const response = await (options?.responseAsText
      ? request.text()
      : request.json());

    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  public put: HttpProviderAbstract['put'] = async <T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url, options?.params), {
      ...(options && { ...options }),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(this.headers && { ...this.headers }),
        ...(options?.headers && { ...options?.headers }),
      },
      body: JSON.stringify(body),
    });

    const response = await (options?.responseAsText
      ? request.text()
      : request.json());

    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  public delete: HttpProviderAbstract['delete'] = async <T>(
    url: string,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url, options?.params), {
      ...(options && { ...options }),
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(this.headers && { ...this.headers }),
        ...(options?.headers && { ...options?.headers }),
      },
    });

    const response = await (options?.responseAsText
      ? request.text()
      : request.json());

    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  private buildRequestUrl(url: string, params?: HttpProviderOptions['params']) {
    let query = '';
    if (!!params) query = new URLSearchParams(params).toString();

    let formattedUrl = `${this.baseUrl}${url}`;
    if (!!query) formattedUrl += `?${query}`;

    return formattedUrl;
  }

  private handleRequestError(error: any) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    if ('message' in error) {
      throw new Error(error.message);
    }

    throw new Error('Não foi possível realizar a requisição!');
  }
}
