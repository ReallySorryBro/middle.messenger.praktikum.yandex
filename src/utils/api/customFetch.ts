enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

interface FetchOptions<T> {
  data?: T;
  timeout?: number;
  method?: METHODS;
  headers?: Record<string, string>;
}

interface ParamsOptions<T> {
  url: string;
  options: FetchOptions<T>;
}

export class HTTPTransport<T> {
  get = ({ url, options = {} }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post = ({ url, options = {} }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = ({ url, options = {} }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete = ({ url, options = {} }: ParamsOptions<T>) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: FetchOptions<T>, timeout = 5000) => {
    const { headers, method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method || METHODS.GET,
        isGet && data && Object.keys(data).length
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

      xhr.send(isGet || !data ? undefined : data as unknown as URLSearchParams);
    });
  };
}
