import { App } from "@Table/app/App";
import { tableConfig } from "@Configs/tableConfig";
import { Fetch } from "@Utils/fetch";

const getUsers = async () => {
  const url = "https://randomuser.me/api/";
  const params = {
    headers: {
      results: tableConfig.rowsToDisplay,
      page: tableConfig.page,
      seed: tableConfig.seed,
      ...tableConfig.filters,
    },
  };
  const result = await Fetch(url, params);

  if (!result) return false;

  return result.results;
};

const TableIndex = async () => {
  const result = await getUsers();

  return <App filters={tableConfig.filters} users={result} />;
};

export default TableIndex;
