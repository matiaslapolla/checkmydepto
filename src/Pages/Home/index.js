import { Grid } from "@mui/material";
import React from "react";
import HeroApartment from "../../Components/hero-main";
import SiteFeaturesSection from "../../Components/site-features-section";

const Home = () => {
  return (
    <Grid display={"flex"} flexDirection={"column"}>
      <HeroApartment />
      <SiteFeaturesSection />
    </Grid>
  );
};

export default Home;
