"use client";
import React from "react";

function Footer() {
  const style: React.CSSProperties = {
    width: "100%",
    // margin: "0 auto",
  };
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div style={style}>
      <hr className="mt-12 border-[#303030]" />
      <div className="flex items-center justify-center">
        <h2 style={{ fontSize: "12px", textAlign: "left" }}>
          &copy; {year} Samuel | All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
