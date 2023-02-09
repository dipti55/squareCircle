import React from "react";
import styles from "./Box.module.css";

const Box = ({ val, number }) => {
  return val == number ? (
    <div
      className={styles.box}
      style={{ borderRadius: "50%", background: "yellow" }}
    ></div>
  ) : (
    <div className={styles.box}></div>
  );
};

export default Box;
