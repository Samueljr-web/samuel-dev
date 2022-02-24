import React from "react";
import "../styles/button.css";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "5rem",
      }}
    >
      <h1 style={{ fontSize: "5rem", color: "grey" }}>404 Error</h1>
      <h3>seems you are in a wrong page</h3>

      <div style={{ marginTop: "3rem" }}>
        <a href="/" className="button">
          Go Back
        </a>
      </div>
    </div>
  );
}

export default NotFound;
