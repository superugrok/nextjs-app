import { App } from "@Table/app/App";
import { tableConfig } from "@Configs/tableConfig";
import { GetStaticProps } from "next";
import { Fetch } from "@Utils/fetch";

export const getStaticProps: GetStaticProps = async () => {
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

  if (!result) return { notFound: true };

  return {
    props: { result: result.results },
  };
};

const TableIndex = ({ result }) => {
  return (
    <App page={tableConfig.page} filters={tableConfig.filters} users={result} />
  );
};

export default TableIndex;
