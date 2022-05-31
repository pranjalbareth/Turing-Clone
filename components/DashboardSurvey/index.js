import React from "react";
import styles from "./DashboardSurvey.module.css";

const DashboardSurvey = () => {
  return (
    <div className={styles.mainConatiner}>
      <div className={styles.containerleft}>
        <div className={styles.containerHeading}>
          Tell us about your work experience
        </div>
        <div className={styles.conatinerSubHeading}>
          We will ask you about your past projects, product involvement and
          experience working with other engineers. This will help us find the
          right jobs for you.
        </div>
        <div className={styles.button}>Start Now</div>
      </div>
      <div className={styles.conatinerRight}>
        <div className={styles.containerRightHeading}>
          Work Experience Survey
        </div>
        <div className={styles.containerRightSubHeading}>Est. time</div>
        <div className={styles.containerRightContent}>30 min</div>
      </div>
    </div>
  );
};

export default DashboardSurvey;
