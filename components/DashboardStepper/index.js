import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiStepIcon-text": {
      fill: "none"
    },
    "& .MuiSvgIcon-root": {
      color: "#eee"
    },
    "& .MuiSvgIcon-root.Mui-completed": {
      color: "#1890FF"
    }
  }
});

const DashboardStepper = () => {
  const steps = [
    "Welcome to Turing",
    "Take the work experience",
    "Pass your 1st test",
    "Pass a tech stack"
  ];

  const classes = useStyles();

  return (
    <Stepper activeStep={1} alternativeLabel className={classes.root}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default DashboardStepper;
