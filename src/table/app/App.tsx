import React from "react";
import "@TableAssets/css/app.css";
import { Table } from "@TableComponents/Table";
import { tableConfig } from "@Configs/tableConfig";
import { Pagination } from "@Components/Pagination";
import { ICommonProps } from "@Table/types/props";

export const App: React.FC<ICommonProps> = ({ users, page, filters }) => {
  return (
    <div className="tableapp">
      <Table page={page} users={users} filters={filters} />
      <Pagination
        route="table"
        page={page}
        pagesCount={tableConfig.pagesToDisplay}
        headers={filters}
      />
    </div>
  );
};
