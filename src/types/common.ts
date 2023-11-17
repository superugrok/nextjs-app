export interface IPaginationProps {
  route: string;
  pagesCount: number;
  headers?: { [key: string]: any } | undefined;
}

export interface IRootProps {
  children: React.ReactNode;
}

export interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
