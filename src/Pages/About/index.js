import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">CheckMyDepto</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="p">crud</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="p">perfil</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="p">galeria de fotos</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="p">blogposts</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="p">comentarios</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
