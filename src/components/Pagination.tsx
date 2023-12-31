"use client";

import { IPaginationProps } from "@Types/common";
import React, { ReactNode } from "react";
import { Button } from "@Components/Button";
import "@Assets/styles/pagination.css";
import { usePathname, useRouter } from "next/navigation";
import { formDynamicRouteQuery } from "@Utils/dynamicRouteQuery";
import { InnerLoading } from "./InnerLoading";

export const Pagination: React.FC<IPaginationProps> = ({
  route,
  pagesCount,
  headers = undefined,
}) => {
  const page = Number(usePathname().replaceAll(/[^\d]/g, "")) || 1;
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const dynamicBtns: ReactNode[] = [];
  const checkBorders = (i: number) => i > 1 && i < pagesCount;
  for (let i = page - 2; i < page + 3; i++) {
    checkBorders(i) &&
      dynamicBtns.push(
        <Button
          onClick={() => {
            setLoading(true);
            router.push(formDynamicRouteQuery(route, i, headers));
          }}
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
      <InnerLoading display={loading} />
      <Button
        onClick={() => {
          setLoading(true);
          router.push(formDynamicRouteQuery(route, 1, headers));
        }}
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
        onClick={() => {
          setLoading(true);
          router.push(formDynamicRouteQuery(route, pagesCount, headers));
        }}
        disabled={page === pagesCount}
      >
        {pagesCount}
      </Button>
    </div>
  );
};
