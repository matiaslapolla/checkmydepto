import { Grid, Typography } from '@mui/material'
import React from 'react'

const HeroTextBanner = () => {
  return (
    <>

      <Grid sx={{
        zIndex: 4,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.66)",
        width: "100%",
        height: 170,
        backdropFilter: "blur(2px)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        gap: 2,
      }}>
        <Grid display={"flex"} gap={1} sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Typography variant="h3" fontWeight={"bold"}>Welcome to</Typography>
          <Typography fontWeight={"bold"} variant={"h3"} sx={{ "&:hover": { color: "orange", transition: "all 0.2s ease-in-out" } }}>CheckMyDepto</Typography>
        </Grid>
        <Grid display={"flex"} flexDirection={"column"}>
          <Typography variant="h6">Apartment reviews, personal recommendations, real photos from the inside, and more!</Typography>
          <Typography variant="h6">Welcome to your #1 resource for apartment reviews</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroTextBanner