import { IFiltersState, IUsersObject, TUsersState } from "./states";

export interface ICommonProps {
  users: IUsersObject[];
  filters: IFiltersState;
}

export interface ITableProps {
  users: IUsersObject[];
  filters: IFiltersState;
}

export interface IFiltersProps {
  filters: IFiltersState;
}
