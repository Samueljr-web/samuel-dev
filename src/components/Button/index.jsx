import React from "react";
import "./button.css";

export const Button = ({ children, type }) => {
  return (
    <div>
      <button className="button" type={type}>
        {children}
      </button>
    </div>
  );
};
