import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import styles from "../../styles/Home.module.css";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

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

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#1890FF',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#1890FF',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#1890FF',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#1890FF',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};


export default function DashboardStepper() {
  const [activeStep, setActiveStep] = React.useState(1);

  
  const classes = useStyles();

 
  const steps = [
    "Welcome to Turing",
    "Take the work experience",
    "Pass your 1st test",
    "Pass a tech stack"
  ];
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const progress = ((activeStep + 1) / 4) * 100;

  
  return (
    <div className={styles.StepperConatiner}>
            <div className={styles.StepperHeading}>
              Tests Progress &nbsp;{" "}
              <span className={styles.StepperSubHeading}>{progress}%</span>
            </div>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel onClick={handleStep(index)}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
    
  );
};

