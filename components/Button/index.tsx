import React from "react";
import styles from "./button.module.css";

export const Button = ({ children, type, onClick, href }: any) => {
  return (
    <div>
      <a href={href} target="_blank" style={{ textDecoration: "none" }}>
        {" "}
        <button className={styles.button} type={type} onClick={onClick}>
          {children}
        </button>
      </a>
    </div>
  );
};
