import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import Card from "../Card";

import styles from "./DashboardTechAssessment.module.css";

const DashboardTechAssessment = () => {
  const cardData = [
    {
      id: 1,
      imgsrc:
        "https://storage.googleapis.com/turing_developers/icon/1638817039267_react.png",
      heading: "ReactJS 16.8++",
      subHeading: "40 min",
      buttontext: "Start test"
    },
    {
      id: 2,
      imgsrc:
        "https://storage.googleapis.com/turing_developers/icon/1597518931792_redux.png",
      heading: "Redux",
      subHeading: "30 min",
      buttontext: "Start test"
    },
    {
      id: 3,
      imgsrc:
        "https://storage.googleapis.com/turing_developers/icon/1638817039267_react.png",
      heading: "ReactJS",
      subHeading: "45 min",
      buttontext: "Start test"
    }
  ];

  return (
    <div className={styles.techStackMainComponent} disabled={true}>
      <div className={styles.techStackUpperContainer}>
        <div className={styles.techStackHeadingContainer}>
          <h2 className={styles.techStackHeading}>Pass a tech stack </h2>
          <LockIcon />
          <span className={styles.techStackSpanHeading}>
            Take Seniority Assessment to unlock
          </span>
        </div>
        <div className={styles.techStackSubHeadingContainer}>
          Become eligible for Jobs by passing the tests below.
        </div>
      </div>
      <div className={styles.techStackLowerContainer}>
        {cardData.map((val) => {
          return <Card val={val} key={val.id} />;
        })}
      </div>
    </div>
  );
};

export default DashboardTechAssessment;
