import { IPaginationProps } from "@TableTypes/props";
import React, { ReactNode } from "react";
import { Button } from "./common/Button";
import "@TableAssets/css/pagination.css";
import { useRouter } from "next/navigation";
import { formDynamicRouteQuery } from "@Utils/dynamicRouteQuery";

export const Pagination = ({ page, pagesCount, filters }: IPaginationProps) => {
  const router = useRouter();
  const dynamicBtns: ReactNode[] = [];
  const checkBorders = (i: number) => i > 1 && i < pagesCount;
  for (let i = page - 2; i < page + 3; i++) {
    checkBorders(i) &&
      dynamicBtns.push(
        <Button
          onClick={() =>
            router.push(formDynamicRouteQuery("table", i, filters))
          }
          key={i}
          disabled={i === page}
        >
          {i}
        </Button>
      );
  }
  const backDotsDisplay = page > 4 ? "inline-block" : "none";
  const forwardDotsDisplay = page < pagesCount - 3 ? "inline-block" : "none";

  return (
    <div className="pagination-container">
      <Button
        onClick={() => router.push(formDynamicRouteQuery("table", 1, filters))}
        disabled={page === 1}
      >
        1
      </Button>
      <Button style={{ display: backDotsDisplay, pointerEvents: "none" }}>
        ...
      </Button>
      {dynamicBtns}
      <Button style={{ display: forwardDotsDisplay, pointerEvents: "none" }}>
        ...
      </Button>
      <Button
        onClick={() =>
          router.push(formDynamicRouteQuery("table", pagesCount, filters))
        }
        disabled={page === pagesCount}
      >
        {pagesCount}
      </Button>
    </div>
  );
};
