import React from "react";
import "@Assets/styles/loading.css";
import { Layout } from "./Layout";

export const Loading = () => {
  return (
    <Layout>
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </Layout>
  );
};
