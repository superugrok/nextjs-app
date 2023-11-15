import { IFiltersState, IUsersObject, TUsersState } from "./states";

export interface ICommonProps {
  users: IUsersObject[];
  filters: IFiltersState;
}

export interface ITableProps {
  users: IUsersObject[];
  page: number;
  filters: IFiltersState;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFiltersProps {
  page: number;
  filters: IFiltersState;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
