export type HttpProviderPayload = FormData | Record<string, any> | object;

export interface HttpProviderOptions {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export default interface HttpProviderAbstract {
  get<T>(url: string, options?: HttpProviderOptions): Promise<T>;

  post<T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ): Promise<T>;

  put<T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ): Promise<T>;

  delete<T>(url: string, options?: HttpProviderOptions): Promise<T>;
}
