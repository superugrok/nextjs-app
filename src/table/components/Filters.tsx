import React from "react";
import { Select } from "./common/Select";
import { IFiltersProps } from "@TableTypes/props";
import "@TableAssets/css/select.css";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { formDynamicRouteQuery } from "@Utils/dynamicRouteQuery";
import { InnerLoading } from "@Components/InnerLoading";

export const Filters: React.FC<IFiltersProps> = ({ filters }) => {
  const [loading, setLoading] = React.useState(false);
  const route = useRouter();
  const page = Number(usePathname().replaceAll(/[^\d]/g, "")) || 1;
  const searchParams = useSearchParams().toString();

  React.useEffect(() => setLoading(false), [searchParams]);

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
      <InnerLoading display={loading} />
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
