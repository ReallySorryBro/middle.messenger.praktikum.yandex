function queryStringify<T = Record<string, unknown>>(data: T) {
  return Object.entries(data).reduce(
    (accStr, [key, item], idx) =>
      (accStr += `${key}=${item}${
        idx < Object.keys(data).length - 1 ? '&' : ''
      }`),
    '',
  );
}
