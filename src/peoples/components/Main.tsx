import React from "react";
import { Link } from "react-router-dom";
import { IAppData } from "../App";

interface IProps {
  appData: IAppData;
  loading: boolean;
}

export const Main = ({ appData, loading }: IProps) => {
  const peoplesList = appData.peoples.map((people) => (
    <li key={people.url}>
      <Link to={`peoples/${people.name}`}>{people.name}</Link>
    </li>
  ));

  const isPageLoading = !appData.count || loading;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{isPageLoading ? "Loading" : <ul>{peoplesList}</ul>}</div>
      <div>{appData.pages}</div>
    </div>
  );
};
