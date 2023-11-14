import { App } from "@Table/app/App";
import { tableConfig } from "@Configs/tableConfig";
import { GetServerSideProps } from "next";
import { Fetch } from "@Utils/fetch";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = { ...context.query };
  delete req.page;
  const { page }: any = context.params;
  const url = "https://randomuser.me/api/";
  const params = {
    headers: {
      results: tableConfig.rowsToDisplay,
      seed: tableConfig.seed,
      page,
      ...req,
    },
  };
  const result = await Fetch(url, params);

  if (!result) return { notFound: true };

  return {
    props: { result: result.results, page: Number(page), req },
  };
};

const TableIndex = ({ result, page, req }) => {
  return <App filters={req} users={result} page={page} />;
};

export default TableIndex;
