import Fab from "@mui/material/Fab";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Help = () => {
  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        margin: "25px",
        backgroundColor: "#444242 !important"
      }}
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
