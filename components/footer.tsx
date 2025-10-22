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
    <div style={style} className="container max-w-3xl mx-auto">
      <hr className="mt-12 border-[#303030]" />
      <div className="flex items-center justify-center mt-2">
        <h2 style={{ fontSize: "13px", textAlign: "left" }}>
          &copy;{year} Samuel | All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
