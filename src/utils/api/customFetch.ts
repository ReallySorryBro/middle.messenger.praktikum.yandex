import { queryStringify } from './queryStringify';

enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

interface FetchOptions<T> {
  data?: T;
  timeout?: number;
  method: Methods;
  headers?: Record<string, string>;
}

interface ParamsOptions<T> {
  url: string;
  options: FetchOptions<T>;
}

export class HTTPTransport<T> {
  get = ({ url, options = { method: Methods.GET } }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: Methods.GET });

  post = ({ url, options = { method: Methods.POST } }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: Methods.POST });

  put = ({ url, options = { method: Methods.PUT } }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: Methods.PUT });

  delete = ({ url, options = { method: Methods.DELETE } }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: Methods.DELETE });

  request = (url: string, options: FetchOptions<T>) => {
    const { headers, method, data } = options;
    const { timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === Methods.GET;

      xhr.open(
        method,
        data && Object.keys(data).length
          ? `${url}?${queryStringify(data)}`
          : url,
      );

      if (headers) {
        Object.entries(headers).forEach(([key, header]) => {
          xhr.setRequestHeader(key, header);
        });
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      if (timeout) {
        xhr.timeout = timeout;
        xhr.ontimeout = reject;
      }

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.send(
        isGet || !data ? undefined : (data as unknown as URLSearchParams),
      );
    });
  };
}
