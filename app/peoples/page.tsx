import { App } from "@Peoples/App";
import { Fetch } from "@Utils/fetch";
import { peoplesConfig } from "@Configs/peoplesConfig";

const getPeoples = async () => {
  const api = `https://swapi.dev/api/people/?page=${peoplesConfig.startPage}`;
  const data = await Fetch(api);

  if (!data) return false;

  return data;
};

const PeoplesIndex = async () => {
  const data = await getPeoples();

  return <App page={peoplesConfig.startPage} appData={data} />;
};

export default PeoplesIndex;
