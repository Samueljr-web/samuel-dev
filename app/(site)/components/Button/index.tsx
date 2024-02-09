import React from "react";

export const Button = ({ children, type, onClick }: any) => {
  return (
    <div>
      <button className="button" type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
