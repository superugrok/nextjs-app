"use client";

import { Button } from "@Components/Button";
import { IErrorProps } from "@Types/common";
import { useEffect } from "react";

const Error: React.FC<IErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <h2 className="error__hover">Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default Error;
