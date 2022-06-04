import styles from "../styles/Home.module.css";
import Head from "next/head";

// Material-UI Components
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

// Custom Components
import SideBar from "../components/SideBar";
import Help from "../components/Help";

export default function IndexPage() {
  return (
    <>
    <Head>
      <title>Turing Remote Developer Jobs | Apply to Elite U.S. Companies</title>
      <link rel="icon" href="https://i.imgur.com/YZA9s2o.png" />
    </Head>
    <div style={{ fontFamily: '"Gordita", sans-serif' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 650
        }}
      >
        <SideBar />
        <Box
          className={styles.homeBox}
          sx={{ minWidth: 350, marginTop: 6, marginBottom: 6 }}
        >
          <h2>Turing Clone | COMETLABS Assessment</h2>
          <h4>Use the sidebar to visit other pages i.e.</h4>
          <ul>
            <li>
              Turing{" "}
              <Button
                sx={{
                  margin: 0,
                  padding: 0,
                  verticalAlign: "initial",
                  fontSize: "16px",
                  fontFamily: "Gordita, sans-serif",
                  textTransform: "none"
                }}
                className={styles.homeBoxLinks}
                href="/dashboard/profile"
              >
                Profile Page
              </Button>
            </li>
            <li>
              Turing Test{" "}
              <Button
                sx={{
                  margin: 0,
                  padding: 0,
                  fontSize: "16px",
                  fontFamily: "Gordita, sans-serif",
                  textTransform: "none"
                }}
                className={styles.homeBoxLinks}
                href="/dashboard/turing_test"
              >
                Dashboard Page
              </Button>
            </li>
          </ul>
          <span>
            <span style={{ fontWeight: "bold" }}>Date :</span> May 31, 2020 |{" "}
            <span style={{ fontWeight: "bold" }}>Developed by :</span> Pranjal
            Bareth
          </span>
        </Box>
      </Box>
      <Help />
    </div>
    </>
  );
}
