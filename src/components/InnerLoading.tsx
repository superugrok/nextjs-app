"use client";

import "@Assets/styles/loading.css";
import ReactDOM from "react-dom";
import React from "react";

export const InnerLoading = ({ display }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);

  const component = (
    <div
      style={{ display: display ? "block" : "none" }}
      className="inner-loader-wrapper"
    >
      <div className="loader"></div>
    </div>
  );

  return isMounted
    ? ReactDOM.createPortal(
        component,
        document.getElementById("root") as Element
      )
    : null;
};
