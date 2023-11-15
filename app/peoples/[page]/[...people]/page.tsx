import { App } from "@Peoples/App";
import Axios from "axios";

const getPeoples = async ({ people }) => {
  const api = `https://swapi.dev/api/people/${people && people[0]}`;
  const data = await Axios(api);

  if (!data) return false;

  return data.data;
};

const PeoplePage = async ({ params }) => {
  const data = await getPeoples(params);

  return (
    <App page={Number(params.page)} appData={data} people={params.people[0]} />
  );
};

export default PeoplePage;
