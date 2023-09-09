import { Grid } from '@mui/material'
import React from 'react'
import HeroTextBanner from './hero-text-banner'

const HeroApartment = () => {
  return (
    <>
      <Grid height={600} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/apartment_illustration.jpg)",
        gap: 4,
        marginTop: 8,
        zindex: 1,
      }}>
        <HeroTextBanner />
      </Grid>

    </>
  )
}

export default HeroApartment