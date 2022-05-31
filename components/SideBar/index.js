import * as React from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import styles from "./SideBar.module.css";

// Material-UI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

// Material-UI Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";

const drawerWidth = 350;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box className={styles.MainBox} sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer sx={{ overflowX: "hidden" }} variant="permanent" open={open}>
        {open ? (
          <>
            <img
              src="https://svgshare.com/i/hri.svg"
              alt="Turing"
              width={"110vw"}
              height={"auto"}
              style={{ padding: "65px 24px 0px" }}
            />
          </>
        ) : (
          <img
            src="https://i.imgur.com/YZA9s2o.png"
            alt="Turing"
            width={"75px"}
            height={"auto"}
            style={{ padding: "45px 22px 0px 12px" }}
          />
        )}
        {open ? (
          <div style={{ padding: "20px 31px 10px 19px" }}>
            <Button
              className={styles.availableForJobs}
              sx={{
                backgroundColor: "#eaeaea",
                color: "#444444",
                textTransform: "none",
                borderRadius: "25px",
                width: "240px !important",
                height: "50px !important",
                display: "flex",
                gap: "10px"
              }}
            >
              <img
                src="https://developers.turing.com/static/media/available_for_work.74e15aac.svg"
                alt="Turing"
              />
              <p>Available for Jobs</p>
            </Button>
          </div>
        ) : (
          <div style={{ padding: "20px 0px 10px 5px" }}>
            <Button
              className={styles.jobAvailableButton}
              sx={{
                backgroundColor: "#fff0",
                color: "#000000",
                textTransform: "none",
                borderRadius: "45px",
                maxWidth: "50px !important",
                height: "50px !important",
                display: "flex"
              }}
            >
              <div className={styles.shadowButton}></div>
              <img
                src="https://developers.turing.com/static/media/available_for_work.74e15aac.svg"
                alt="Turing"
              />
            </Button>
          </div>
        )}
        <List>
          <Link href="/">
            <ListItem key={"Home"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                className={styles.ListItemButton}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 2
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Home"
                  sx={{ fontFamily: "Gordita-Light", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link href="/dashboard/profile">
            <ListItem key={"Profile"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {open ? (
                    <img
                      src="https://developers.turing.com/static/media/round-check_circle-24px.89a93631.svg"
                      alt="Turing"
                    />
                  ) : (
                    <PersonIcon />
                  )}
                </ListItemIcon>

                <ListItemText
                  primary="Profile"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/turing_test">
            <ListItem
              key={"Turing Tests"}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {open ? (
                    <img
                      style={{ paddingLeft: "5px" }}
                      src="data:image/png;base64,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"
                      alt="turing"
                    />
                  ) : (
                    <AssessmentIcon />
                  )}
                </ListItemIcon>

                <ListItemText
                  primary="Turing Tests"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          {["Coding Challenges", "Get Matched"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                cursor: "not-allowed",
                display: "block"
              }}
            >
              <ListItemButton
                disabled
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1.5
                }}
              >
                {open ? (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 5 : "auto",
                      justifyContent: "center",
                      display: "flex"
                    }}
                  ></ListItemIcon>
                ) : (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {index % 2 === 0 ? (
                      <DeveloperBoardOutlinedIcon />
                    ) : (
                      <DescriptionIcon />
                    )}
                  </ListItemIcon>
                )}
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            key={"Refer & Win $250"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                py: 1.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "rgb(102, 204, 128)"
                }}
              >
                <LocalAtmIcon />
              </ListItemIcon>

              <ListItemText
                primary="Refer & Win $250"
                sx={{ opacity: open ? 1 : 0, color: "rgb(102, 204, 128)" }}
              />
            </ListItemButton>
          </ListItem>
          {["Jobs", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {index % 2 === 0 ? <WorkOutlineIcon /> : <AccountBoxIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem
            onClick={handleDrawerToggle}
            sx={{
              position: "fixed",
              bottom: 0,
              margin: 0,
              padding: 0,
              cursor: "pointer"
            }}
          >
            <Divider />
            <DrawerHeader>
              <IconButton>
                {open ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon sx={{ position: "relative", right: 0 }} />
                )}
              </IconButton>
            </DrawerHeader>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
