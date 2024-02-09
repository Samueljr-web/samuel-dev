"use client";
import React, { useEffect } from "react";
import { Button } from "./components/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "5rem",
        }}
      >
        <h1 style={{ fontSize: "10rem", color: "grey" }}>404</h1>
        <h3>seems you are in a wrong page</h3>

        <div style={{ marginTop: "3rem" }}>
          <Button>Go back</Button>
        </div>
      </div>
    </>
  );
};

export default Error;
