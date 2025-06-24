import type {
  HttpProviderAbstract,
  HttpProviderOptions,
  HttpProviderPayload,
} from '@domain/providers';

export default class FetchHttpProvider implements HttpProviderAbstract {
  private baseUrl: string = '';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public get: HttpProviderAbstract['get'] = async <T>(
    url: string,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url), {
      ...(options && { ...options }),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await request.json();
    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  public post: HttpProviderAbstract['post'] = async <T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url), {
      ...(options && { ...options }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();
    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  public put: HttpProviderAbstract['put'] = async <T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url), {
      ...(options && { ...options }),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();
    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  public delete: HttpProviderAbstract['delete'] = async <T>(
    url: string,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(this.buildRequestUrl(url), {
      ...(options && { ...options }),
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await request.json();
    if (!request.ok) this.handleRequestError(response);

    return response as T;
  };

  private buildRequestUrl(url: string) {
    return `${this.baseUrl}${url}`;
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
