import { IFiltersState, IUsersObject, TUsersState } from "./states";

export interface ICommonProps {
  users?: IUsersObject[];
  page: number;
  filters: IFiltersState;
}

export interface IPaginationProps extends ICommonProps {
  pagesCount: number;
}

export interface IFiltersProps {
  page: number;
  filters: IFiltersState;
}
