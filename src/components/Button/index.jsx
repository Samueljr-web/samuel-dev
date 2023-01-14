import React from "react";
import "./button.css";

export const Button = ({ children }) => {
  return (
    <div>
      <button className="button">{children}</button>
    </div>
  );
};
