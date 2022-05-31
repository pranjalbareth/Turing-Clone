import React from "react";
import styles from "./ProfileCardRows.module.css";

// Material-UI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProfileCardRows = (props) => {
  const {
    leftLogo,
    leftHeading,
    rightHeading,
    rightsubHeading,
    bottomContainer,
    profilePicContainer,
    subLeftHeading
  } = props;
  return (
    <div>
      <div className={styles.mainComponent}>
        <div className={styles.leftContainer}>
          {profilePicContainer ? (
            <img
              className={styles.profileImage}
              src={
                "https://storage.googleapis.com/turing_developers/avatar/1653828772484_1651233561082.jpeg"
              }
              alt={"Profile Pic"}
              width={"45px"}
              style={{ borderRadius: "25px" }}
            />
          ) : null}
          <div className={styles.leftLogo}>{leftLogo}</div>
          {subLeftHeading ? (
            <div className={styles.leftHeadingWhenSub}>
              <div className={styles.leftHeadingMain}>{leftHeading}</div>
              <div className={styles.leftHeadingSub}>{subLeftHeading}</div>
            </div>
          ) : (
            <div className={styles.leftHeading}>
              <div className={styles.leftHeadingMain}>{leftHeading}</div>
            </div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.rightContainer}>
            <div className={styles.rightHeading}>{rightHeading}</div>
            <div className={styles.rightsubHeading}>{rightsubHeading}</div>
          </div>
          <div className={styles.editContainer}>
            <img
              className={styles.rightLogo}
              src={"https://i.imgur.com/JR7Wtov.png"}
              alt="Edit"
            />
          </div>
        </div>
      </div>
      {bottomContainer ? (
        <div className={styles.bottomContainer}>
          <div className={styles.emailContainer}>
            <MailIcon />
            <span className={styles.email}>pranjalnirmala@gmail.c...</span>
          </div>
          <div className={styles.emailContainer}>
            <LocalPhoneIcon />
            <span className={styles.email}>808-5941-473</span>
          </div>
          <div className={styles.LinkedInContainer}>
            <LinkedInIcon />
          </div>
          <div className={styles.LinkedInContainer}>
            <GitHubIcon />
          </div>
        </div>
      ) : null}
      <div className={styles.divider}></div>
    </div>
  );
};

export default ProfileCardRows;
