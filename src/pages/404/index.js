import React from "react";
import { Button } from "../../components/Button";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "5rem",
      }}
    >
      <h1 style={{ fontSize: "5rem", color: "grey" }}>404</h1>
      <h3>seems you are in a wrong page</h3>

      <div style={{ marginTop: "3rem" }}>
        <Button>Go back</Button>
      </div>
    </div>
  );
}

export default NotFound;
