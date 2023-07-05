import { Grid, Typography } from "@mui/material";
import React from "react";
import HeroApartment from "../../Components/hero-main";
import SiteFeaturesSection from "../../Components/site-features-section";

const Home = () => {
  return <Grid sx={{
    display: "flex",
    flexDirection: "column",
    height: "100vh",

  }}>
    <Grid mt={0}>
      <HeroApartment />
      <SiteFeaturesSection />
    </Grid>
  </Grid>;
};

export default Home;
