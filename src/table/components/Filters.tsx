import React from "react";
import { Select } from "./common/Select";
import { IFiltersProps } from "@TableTypes/props";
import "@TableAssets/css/select.css";
import { useRouter } from "next/navigation";
import { formDynamicRouteQuery } from "@Utils/dynamicRouteQuery";

export const Filters: React.FC<IFiltersProps> = ({
  filters,
  page,
  setLoading,
}) => {
  const route = useRouter();

  const filterOptions = {
    gender: ["male", "female"],
    nat: [
      "AU",
      "BR",
      "CA",
      "CH",
      "DE",
      "DK",
      "ES",
      "FI",
      "FR",
      "GB",
      "IE",
      "IN",
      "IR",
      "MX",
      "NL",
      "NO",
      "NZ",
      "RS",
      "TR",
      "UA",
      "US",
    ],
  };
  const filtersList = [
    {
      type: "gender",
      label: "Gender",
      options: filterOptions.gender,
      value: filters.gender,
      disabled: true,
    },
    {
      type: "nat",
      label: "Nationality",
      options: filterOptions.nat,
      value: filters.nat,
    },
  ];

  const handleChange = (changeEvent: any, type: string) => {
    setLoading(true);
    route.push(
      formDynamicRouteQuery("table", page, {
        ...filters,
        [type]: changeEvent.target.value,
      })
    );
  };

  return (
    <div className="select">
      <span className="select__desc">Filters:</span>
      {filtersList.map((filter) => (
        <Select
          key={filter.type}
          options={filter.options}
          onChange={handleChange}
          type={filter.type}
          value={filter.value}
          label={filter.label}
          disabled={filter.disabled}
        />
      ))}
    </div>
  );
};
