import Link from "next/link";
import { Pagination } from "@Components/Pagination";
import { peoplesConfig } from "@Configs/peoplesConfig";
import "./styles/app.scss";

interface IPeoples {
  name: string;
  url: string;
}

interface IAppData {
  page: number;
  appData: {
    count: number;
    results: IPeoples[];
  };
}

export const App: React.FC<IAppData> = ({ appData, page }) => {
  const pagesCount =
    Math.floor(appData.count / peoplesConfig.rowsToDisplay) + 1;
  const peoplesList = appData?.results?.map((people) => (
    <li key={people.url}>
      <Link href={`/peoples/${page}/${people.url.replaceAll(/[^\d]/g, "")}`}>
        {people.name}
      </Link>
    </li>
  ));

  return (
    <div className="peoples">
      <span className="peoples__hover">Skywars peoples list</span>
      <ul className="peoples__list">{peoplesList}</ul>
      <Pagination route="peoples" page={page} pagesCount={pagesCount} />
    </div>
  );
};
