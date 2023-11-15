"use client";

import React from "react";
import "@TableAssets/css/app.css";
import { Table } from "@TableComponents/Table";
import { tableConfig } from "@Configs/tableConfig";
import { Pagination } from "@Components/Pagination";
import { ICommonProps } from "@Table/types/props";
import Loading from "@App/loading";
import { usePathname, useSearchParams } from "next/navigation";

export const App: React.FC<ICommonProps> = ({ users, filters }) => {
  const [loading, setLoading] = React.useState(false);
  const page = Number(usePathname().replaceAll(/[^\d]/g, "")) || 1;
  const searchParams = useSearchParams().toString();

  // Reset loading when searchParams are received
  React.useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  if (loading) return <Loading />;

  return (
    <div className="tableapp">
      <Table
        setLoading={setLoading}
        page={page}
        users={users}
        filters={filters}
      />
      <Pagination
        setLoading={setLoading}
        route="table"
        page={page}
        pagesCount={tableConfig.pagesToDisplay}
        headers={filters}
      />
    </div>
  );
};
