export interface IPaginationProps {
  route: string;
  page: number;
  pagesCount: number;
  headers?: { [key: string]: any } | undefined;
}
