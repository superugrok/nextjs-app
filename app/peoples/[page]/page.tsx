import { App } from "@Peoples/App";
import Axios from "axios";

const getPeoples = async ({ page }) => {
  const api = `https://swapi.dev/api/people/?page=${page}`;
  const data = await Axios(api);

  if (!data) return false;

  return data.data;
};

const PeoplesIndex = async ({ params }) => {
  const data = await getPeoples(params);

  return <App page={Number(params.page)} appData={data} />;
};

export default PeoplesIndex;
