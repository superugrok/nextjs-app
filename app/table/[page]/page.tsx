import { App } from "@Table/app/App";
import { tableConfig } from "@Configs/tableConfig";
import { Fetch } from "@Utils/fetch";

const getUsers = async (props) => {
  const { searchParams } = props;
  const { page } = props.params;
  const url = "https://randomuser.me/api/";
  const opts = {
    headers: {
      results: tableConfig.rowsToDisplay,
      seed: tableConfig.seed,
      page,
      ...searchParams,
    },
  };
  const result = await Fetch(url, opts);

  if (!result) return false;

  return result.results;
};

const TablePage = async ({ searchParams, params }) => {
  const result = await getUsers({ searchParams, params });

  return <App filters={searchParams} users={result} />;
};

export default TablePage;
