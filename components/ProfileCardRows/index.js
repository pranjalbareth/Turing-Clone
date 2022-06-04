import React from "react";
import styles from "./ProfileCardRows.module.css";

// Material-UI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProfileCardRows = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={handleOpen}
              className={styles.rightLogo}
              src={"https://i.imgur.com/JR7Wtov.png"}
              alt="Edit"
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box 
              className={styles.EditModal} sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Upload Resume
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, color:"rgba(0,0,0,.65)" }}>
                Upload your resume below and we'll try to automatically parse your information for the next steps. Don't worry if your resume isn't perfect, we'll help you polish it later.
                </Typography>
                <Button
                  sx={{ marginTop: '26px', boxShadow: "none"}}
                  variant="contained"
                  component="label"
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </Box>
            </Modal>
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
