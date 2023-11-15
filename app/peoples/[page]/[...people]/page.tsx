import { People } from "@Peoples/components/People";
import Axios from "axios";

const getPeoples = async ({ people }) => {
  const api = `https://swapi.dev/api/people/${people && people[0]}`;
  const data = await Axios(api);

  if (!data) return false;

  return data.data;
};

const PeoplesIndex = async ({ params }) => {
  const data = await getPeoples(params);

  return (
    <People page={Number(params.page)} data={data} people={params.people[0]} />
  );
};

export default PeoplesIndex;
