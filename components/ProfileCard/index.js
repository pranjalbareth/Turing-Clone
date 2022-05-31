import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ProfileCardRows from "../ProfileCardRows";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ProfileSkillRow from "../ProfileSkillRow";

const ProfileCard = () => {
  return (
    <Card
      sx={{
        minWidth: 700,
        borderRadius: "9px",
        boxShadow: "0 1px 9px #e8e8e8"
      }}
    >
      <CardContent sx={{ margin: "15px" }}>
        <span
          style={{
            paddingTop: "15px",
            fontFamily: "Gordita-Medium, sans-serif",
            fontSize: "18px",
            fontWeight: 600,
            color: "#2d2d2d"
          }}
        >
          Turing
        </span>
        <ProfileCardRows
          leftLogo={
            <DescriptionIcon style={{ fontSize: "20px", color: "#000000" }} />
          }
          leftHeading="Upload your resume"
          rightHeading="PranjalBareth_Resume.pdf"
        />
        <ProfileCardRows
          leftHeading="Pranjal Bareth"
          subLeftHeading="India"
          bottomContainer={true}
          profilePicContainer={true}
        />
        <ProfileCardRows
          leftLogo={<SettingsApplicationsIcon />}
          leftHeading="Overall Experience"
          rightHeading="1 years/ 1 years remote"
          rightsubHeading="Great English Proficiency"
        />
        <ProfileCardRows
          leftLogo={<EventAvailableIcon />}
          leftHeading="Availibility"
          rightHeading="Full Time"
          rightsubHeading="Ready to start now"
        />
        <ProfileCardRows
          leftLogo={<AssignmentIndIcon />}
          leftHeading="Role and current Salary"
          rightHeading="Web Frontend"
          rightsubHeading="Current Salary: $14,000/year"
        />
        <ProfileSkillRow />
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
