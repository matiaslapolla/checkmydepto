import { Grid, Typography } from '@mui/material'
import React from 'react'

const HeroTextBanner = () => {
  return (
    <>
      <Grid sx={{
        zIndex: 4,
        backgroundColor: "rgba(255,255,255,0.66)",
        width: "100%",
        minHeight: 170,
        backdropFilter: "blur(2px)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
        gap: 2,
      }}>
        <Grid container gap={1} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Grid item>

            <Typography xs={3} variant="h3" fontWeight={"bold"}>Welcome to</Typography>
          </Grid>
          <Grid item>
            <Typography xs={6} fontWeight={"bold"} variant={"h3"} sx={{ "&:hover": { color: "orange", transition: "all 0.2s ease-in-out" } }}>CheckMyDepto</Typography>
          </Grid>
        </Grid>
        <Grid sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Typography sx={{ maxWidth: "75ch" }} variant="h6">Apartment reviews, personal recommendations, real photos from the inside, and more!</Typography>
          <Typography variant="h6">Your #1 resource for apartment reviews</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroTextBanner