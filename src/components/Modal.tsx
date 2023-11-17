"use client";

import React from "react";
import ReactDOM from "react-dom";
import { IModalProps } from "@TableTypes/common";
import "@Assets/styles/modal.css";

export const Modal: React.FC<IModalProps> = ({
  visible,
  setVisible,
  content,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    const listener = (event: any) => {
      event.target.className == "modal" &&
        setVisible({ visible: false, modalContnet: <div></div> });
    };

    document.addEventListener("click", listener);
    setIsMounted(true);

    return () => document.removeEventListener("click", listener);
  }, []);

  const component = (
    <div className="modal" style={{ display: visible ? "block" : "none" }}>
      <div className="modal__overlay">{content}</div>
    </div>
  );

  return isMounted
    ? ReactDOM.createPortal(
        component,
        document.getElementById("root") as Element
      )
    : null;
};
