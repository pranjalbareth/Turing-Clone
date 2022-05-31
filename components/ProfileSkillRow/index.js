import React from "react";

import styles from "./ProfileSkillRow.module.css";

const ProfileSkillRow = () => {
  return (
    <div className={styles.mainComponent}>
      <div className={styles.upperContainer}>
        <div className={styles.heading}>Skills</div>
        <div className={styles.editContainer}>
          <img
            className={styles.rightLogo}
            src={"https://i.imgur.com/JR7Wtov.png"}
            alt="Edit"
          />
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.experienced}>
          <div className={styles.subHeading}>Expert</div>
          <div className={styles.list}>
            <div className={styles.listitems}>JavaScript</div>
            <div className={styles.listitems}>ReactJS</div>
            <div className={styles.listitems}>Figma</div>
            <div className={styles.listitems}>Adobe XD</div>
          </div>
        </div>
        <div className={styles.experienced}>
          <div className={styles.subHeading}>Advanced</div>
          <div className={styles.list}>
            <div className={styles.listitems}>NextJS</div>
            <div className={styles.listitems}>Node JS</div>
            <div className={styles.listitems}>Redux</div>
          </div>
        </div>
        <div className={styles.experienced}>
          <div className={styles.subHeading}>Beginner</div>
          <div className={styles.list}>
            <div className={styles.listitems}>Google Cloud Platform</div>
            <div className={styles.listitems}>MongoDB</div>
            <div className={styles.listitems}>PostgreSQL</div>
            <div className={styles.listitems}>Docker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkillRow;
