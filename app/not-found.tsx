import { Button } from "@/components/button";
import React from "react";

function NotFound() {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <main>
      <div style={style}>
        <h2 style={{ fontSize: "6rem" }}>404</h2>
        <p>uhm... this page doesn&apos;t exist</p>{" "}
        <div style={{ marginTop: "3rem" }}>
          <Button style={{ height: "1.5rem" }}>Go back</Button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
