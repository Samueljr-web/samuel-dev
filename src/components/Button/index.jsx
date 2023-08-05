import React from "react";
import "./button.css";

export const Button = ({ children, type, onClick }) => {
  return (
    <div>
      <button className="button" type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
