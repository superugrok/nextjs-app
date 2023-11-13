import React from "react";
import "@TableAssets/css/app.css";
import { Table } from "@TableComponents/Table";
import { Pagination } from "@TableComponents/Pagination";
import { IFiltersState, TUsersState } from "@TableTypes/states";
import Axios from "axios";
import { Loading } from "@Table/components/Loading";

export const App: React.FC = () => {
  const [filters, setFilters] = React.useState<IFiltersState>({
    nat: "DK",
    gender: "male",
  });
  const [users, setUsers] = React.useState<TUsersState>({ 1: [] });
  const [page, setPage] = React.useState<number>(1);
  // Preventing fetcing data at didMount twice.
  const [isFirstLoading, setIsFirstLoading] = React.useState(true);

  // App config
  const rowsToDisplay = 20;
  const pagesToDisplay = 1000;

  const getUsers = async (page: number, filtersChanged?: boolean) => {
    const result = await Axios.get("https://randomuser.me/api/", {
      params: {
        results: rowsToDisplay,
        page,
        seed: "huskiesarecute",
        ...filters,
      },
    });
    filtersChanged
      ? setUsers({ 1: result.data.results })
      : setUsers((users) => ({ ...users, [page]: result.data.results }));
  };

  React.useEffect(() => {
    getUsers(page);
  }, []);

  React.useEffect(() => {
    !users[page] && getUsers(page);
    !users[page] && console.log("Getting pages");
  }, [page]);

  React.useEffect(() => {
    if (!isFirstLoading) {
      getUsers(1, true);
      setPage(1);
    } else setIsFirstLoading(false);
  }, [filters]);

  if (!users[page]) return <Loading />;

  return (
    <div className="tableapp">
      <Table
        users={users}
        page={page}
        filters={filters}
        setFilters={setFilters}
      />
      <Pagination
        users={users}
        page={page}
        setPage={setPage}
        pagesCount={pagesToDisplay}
      />
    </div>
  );
};
