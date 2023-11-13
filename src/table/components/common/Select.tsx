import { ISelectProps } from "@TableTypes/common";
import React from "react";
import "@TableAssets/css/select.css";

export const Select = ({
  onChange,
  options,
  type,
  value,
  label,
}: ISelectProps) => {
  const opts = options.map((el) => (
    <option value={el} key={el}>
      {el}
    </option>
  ));

  return (
    <select
      className="selector"
      value={value}
      onChange={(event) => onChange(event, type)}
    >
      <optgroup label={label || type}>{opts}</optgroup>
    </select>
  );
};
