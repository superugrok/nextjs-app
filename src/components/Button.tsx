import { IButtonProps } from "@TableTypes/common";
import React from "react";
import "@Assets/styles/button.css";

export const Button = ({
  className,
  disabled,
  onClick,
  children,
  style,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className || "btn"}
      style={style}
    >
      {children}
    </button>
  );
};
