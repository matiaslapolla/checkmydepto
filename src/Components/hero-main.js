import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeroTextBanner from './hero-text-banner'
import HeroSearch from './hero-search'

const HeroApartment = () => {
  return (
    <>
      <Grid height={500} sx={{
        display: "flex",
        border: "1px solid black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: "url(/apartment_illustration.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        filter: "brightness(0.97)",
        gap: 4,
      }}>
        <HeroTextBanner />
        <HeroSearch />
        {/* <Grid sx={{
          backgroundImage: "url(/apartment_illustration.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          filter: "brightness(0.97)",
          top: 0,
          marginTop: 0,
          height: "100%",
          zIndex: -1,
        }} >
        </Grid> */}
      </Grid>

    </>
  )
}

export default HeroApartment