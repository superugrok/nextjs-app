export interface IPaginationProps {
  route: string;
  page: number;
  pagesCount: number;
  headers?: { [key: string]: any } | undefined;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IRootProps {
  children: React.ReactNode;
}

export interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
