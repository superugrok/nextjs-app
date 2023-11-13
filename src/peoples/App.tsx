import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import axios from "axios";
import { Main } from "./components/Main";
import "./App.css";

import Backbone from "backbone";
import _ from "underscore";
import { NoPage } from "./components/NoPage";

interface IPeople {
  name: string;
  url: string;
}
export interface IAppData {
  count: number;
  peoples: IPeople[];
  pages: any;
}

export const App: React.FC = () => {
  const [appData, setAppData] = React.useState<IAppData>({
    count: 0,
    peoples: [],
    pages: [],
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  // Build list and pagination functions
  const buildPagination = (pagesCount: number) => {
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        <button key={i} onClick={() => setNewPage(i + 1)}>
          {i + 1}
        </button>
      );
      if (i + 1 == pagesCount) return pages;
    }
  };
  const getPagesCount = (pageLength: number, totalPeople: number) =>
    Math.floor(pageLength / totalPeople) + 1;

  // Get new page data
  const setNewPage = async (page: number) => {
    setLoading(true);
    const data = await axios.get(
      `https://swapi.dev/api/people/?=2&page=${page}`
    );
    setAppData((appData) => ({ ...appData, peoples: data.data?.results }));
    setLoading(false);
  };

  // Get initial data
  const getData = async () => {
    const data = await axios.get("https://swapi.dev/api/people/?page=1");
    setAppData({
      count: data.data?.count,
      peoples: data.data?.results,
      pages: buildPagination(
        getPagesCount(data.data?.count, data.data?.results.length)
      ),
    });
  };

  // Backbone building component - view
  const BackboneView = Backbone.View.extend({
    render: function (url: string) {
      this.$el.html(url);
      return this;
    },
  });

  const buildPeoplesRoutes = (peoples: IPeople[]) =>
    peoples.map((people) => {
      const BackboneComponent = new BackboneView().render(people.url).el
        .innerHTML;
      return (
        <Route
          key={people.url}
          path={`peoples/${people.name}`}
          element={<div>{BackboneComponent}</div>}
        />
      );
    });

  React.useEffect(() => {
    getData();
  }, []);

  // Array.prototype.myMap = function (func: any) {
  //   let newArr = [];
  //   for (let arrMember in this) {
  //     newArr.push(func(this[arrMember]));
  //   }
  //   return newArr;
  // };
  // const test = ["1", 2, "some", false].myMap((arrM) => <div>{arrM}</div>);
  // console.log(test);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Main appData={appData} loading={loading} />}
        />
        <Route path="*" element={<NoPage />} />
        {buildPeoplesRoutes(appData.peoples)}
      </Routes>
    </Router>
  );
};
