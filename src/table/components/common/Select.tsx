import { ISelectProps } from "@TableTypes/common";
import React from "react";
import "@TableAssets/css/select.css";

export const Select: React.FC<ISelectProps> = ({
  onChange,
  options,
  type,
  value,
  label,
  disabled,
}) => {
  const opts = options.map((el) => (
    <option value={el} key={el}>
      {el}
    </option>
  ));

  return (
    <select
      disabled={disabled}
      className="selector"
      value={value}
      onChange={(event) => onChange(event, type)}
    >
      <optgroup label={label || type}>{opts}</optgroup>
    </select>
  );
};
