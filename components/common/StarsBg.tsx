import React from "react";
import styles from "./stars.module.scss";

const StarsBg = () => {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className={styles.star}></div>
      ))}
    </div>
  );
};

export default StarsBg;
