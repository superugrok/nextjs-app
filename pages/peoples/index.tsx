import { App } from "@Peoples/App";
import { GetStaticProps } from "next";
import { Fetch } from "@Utils/fetch";
import { peoplesConfig } from "@Configs/peoplesConfig";

export const getStaticProps: GetStaticProps = async () => {
  const api = `https://swapi.dev/api/people/?page=${peoplesConfig.startPage}`;
  const data = await Fetch(api);

  if (!data) return { notFound: true };

  return { props: { data } };
};

const PeoplesIndex = ({ data }) => {
  return <App page={peoplesConfig.startPage} appData={data} />;
};

export default PeoplesIndex;
