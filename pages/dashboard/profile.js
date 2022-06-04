import SideBar from "../../components/SideBar";
import ProfileCard from "../../components/ProfileCard";
import Box from "@mui/material/Box";
import Help from "../../components/Help";
import Head from "next/head";

export default function Profile() {
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
          minHeight: 350
        }}
      >
        <SideBar />
        <Box sx={{ minWidth: 350, marginTop: 6, marginBottom: 6 }}>
          <ProfileCard />
        </Box>
      </Box>
      <Help />
    </div>
    </>
  );
}
