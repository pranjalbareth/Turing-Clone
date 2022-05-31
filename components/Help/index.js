import styles from "./Help.module.css";
import Fab from "@mui/material/Fab";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Help = () => {
  return (
    <Fab
      className={styles.HelpButton}
      variant="extended"
      color="primary"
      aria-label="add"
    >
      <HelpOutlineIcon sx={{ mr: 1 }} />
      Help
    </Fab>
  );
};

export default Help;
