import { App } from "@Peoples/App";
import { GetServerSideProps } from "next";
import { Fetch } from "@Utils/fetch";
import Axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;
  const api = `https://swapi.dev/api/people/?page=${page}`;
  // const data = await Fetch(api);
  const data = await Axios.get(api);

  if (!data) return { notFound: true };

  return {
    props: { data: data.data, page: Number(page) },
  };
};

const PeoplesId = ({ data, page }) => {
  return <App appData={data} page={page} />;
};

export default PeoplesId;
