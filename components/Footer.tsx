import React from "react";

function Footer() {
  const style: React.CSSProperties = {
    width: "80%",
    margin: "0 auto",
  };
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          height: "2px",
          background: "#303030",
        }}
      ></div>
      <div style={{ padding: "2rem 0" }}>
        <h2 style={{ fontSize: "12px", textAlign: "left" }}>
          &copy;2024 Samuel
        </h2>
      </div>
    </div>
  );
}

export default Footer;
