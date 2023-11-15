import { IFiltersState, IUsersObject, TUsersState } from "./states";

export interface ICommonProps {
  users?: IUsersObject[];
  page: number;
  filters: IFiltersState;
}

export interface IFiltersProps {
  page: number;
  filters: IFiltersState;
}
