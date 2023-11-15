import { IButtonProps } from "@TableTypes/common";
import React from "react";
import "@Assets/styles/button.css";

export const Button: React.FC<IButtonProps> = ({
  className,
  disabled,
  onClick,
  children,
  style,
}) => {
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
