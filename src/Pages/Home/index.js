import { Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return <Grid sx={{
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Typography variant="h1">Home</Typography>
  </Grid>;
};

export default Home;
