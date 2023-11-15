"use client";

import React from "react";
import Link from "next/link";
import { Pagination } from "@Components/Pagination";
import { peoplesConfig } from "@Configs/peoplesConfig";
import "./styles/app.scss";
import Loading from "@App/loading";
import { People } from "./components/People";
import { IAppData } from "@PeoplesTypes/common";

export const App: React.FC<IAppData> = ({ appData, page, people }) => {
  const [loading, setLoading] = React.useState(false);

  const pagesCount =
    Math.floor(appData.count / peoplesConfig.rowsToDisplay) + 1;
  const peoplesList = appData?.results?.map((people) => (
    <li onClick={() => setLoading(true)} key={people.url}>
      <Link href={`/peoples/${page}/${people.url.replaceAll(/[^\d]/g, "")}`}>
        {people.name}
      </Link>
    </li>
  ));

  if (loading) return <Loading />;

  if (people)
    return (
      <People
        page={page}
        data={appData}
        people={people}
        setLoading={setLoading}
      />
    );

  return (
    <div className="peoples">
      <span className="peoples__hover">Skywars peoples list</span>
      <ul className="peoples__list">{peoplesList}</ul>
      <Pagination
        setLoading={setLoading}
        route="peoples"
        page={page}
        pagesCount={pagesCount}
      />
    </div>
  );
};
