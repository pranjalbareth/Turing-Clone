import React from "react";
import styles from "./Card.module.css";

const Card = ({ val }) => {
  return (
    <div className={styles.mainCardComponent}>
      <img alt="card-img" src={val.imgsrc} className={styles.img} />
      <div className={styles.HeadingContainer}>{val.heading}</div>
      <div className={styles.SubHeadingContainer}>{val.subHeading}</div>
      <div className={styles.button}>{val.buttontext}</div>
    </div>
  );
};

export default Card;
