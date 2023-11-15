"use client";

import { Button } from "@Components/Button";
import { useEffect } from "react";

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: IErrorProps) => {
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
