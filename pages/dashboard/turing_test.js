import React from "react";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";

// Custom Components
import SideBar from "../../components/SideBar";
import DashboardStepper from "../../components/DashboardStepper";
import DashboardTechAssessment from "../../components/DashboardTechAssessment";
import DashboardSurvey from "../../components/DashboardSurvey";
import Help from "../../components/Help";

const about = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className={styles.mainWrapper}>
          <DashboardStepper/>
          <DashboardSurvey />
          <DashboardTechAssessment />
        </div>
      </Box>
      <Help />
    </Box>
  );
};

export default about;
