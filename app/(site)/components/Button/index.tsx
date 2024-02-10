import React from "react";
import styles from "./button.module.css";

export const Button = ({ children, type, onClick }: any) => {
  return (
    <div>
      <button className={styles.button} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
