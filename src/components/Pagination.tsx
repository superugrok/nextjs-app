import { IPaginationProps } from "@Types/common";
import React, { ReactNode } from "react";
import { Button } from "@Components/Button";
import "@Assets/styles/pagination.css";
import { useRouter } from "next/navigation";
import { formDynamicRouteQuery } from "@Utils/dynamicRouteQuery";

export const Pagination = ({
  route,
  page,
  pagesCount,
  headers = undefined,
}: IPaginationProps) => {
  const router = useRouter();
  const dynamicBtns: ReactNode[] = [];
  const checkBorders = (i: number) => i > 1 && i < pagesCount;
  for (let i = page - 2; i < page + 3; i++) {
    checkBorders(i) &&
      dynamicBtns.push(
        <Button
          onClick={() => router.push(formDynamicRouteQuery(route, i, headers))}
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
        onClick={() => router.push(formDynamicRouteQuery(route, 1, headers))}
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
          router.push(formDynamicRouteQuery(route, pagesCount, headers))
        }
        disabled={page === pagesCount}
      >
        {pagesCount}
      </Button>
    </div>
  );
};
