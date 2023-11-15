interface IFetchParams {
  settings?: RequestInit;
  headers?: { [key: string]: any };
}

export const Fetch = (api: string, params?: IFetchParams) => {
  const getData = async (url: URL) => {
    try {
      const response = await fetch(url, {
        ...params?.settings,
      });
      const data = await response.json();
      return data;
    } catch {
      return false;
    }
  };

  const url = new URL(api);
  url.search = new URLSearchParams(params?.headers).toString();

  return getData(url);
};
