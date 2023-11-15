import React from "react";
import { IModalProps } from "@TableTypes/common";

export const Modal: React.FC<IModalProps> = ({
  visible,
  setVisible,
  content,
}) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      event.target.className == "modal" &&
        setVisible({ visible: false, modalContnet: <div></div> });
    };

    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <div className="modal" style={{ display: visible ? "block" : "none" }}>
      <div className="modal__overlay">{content}</div>
    </div>
  );
};
