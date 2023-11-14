import React from "react";
import "@TableAssets/css/app.css";
import { Table } from "@TableComponents/Table";
import { tableConfig } from "@Configs/tableConfig";
import { Pagination } from "@TableComponents/Pagination";
import { ICommonProps } from "@Table/types/props";

export const App: React.FC<ICommonProps> = ({ users, page, filters }) => {
  return (
    <div className="tableapp">
      <Table page={page} users={users} filters={filters} />
      <Pagination
        page={page}
        pagesCount={tableConfig.pagesToDisplay}
        filters={filters}
      />
    </div>
  );
};
