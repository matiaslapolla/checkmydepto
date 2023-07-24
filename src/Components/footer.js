import { Grid, Typography } from '@mui/material'
import React from 'react'

const FooterComponent = () => {
  return (
    <>
      <Grid container flexDirection={"column"} alignItems={"center"} sx={{ backgroundColor: "white" }} minHeight={32} justifyContent={"center"}>
        <a style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "normal",
          fontSize: "1rem",
          padding: "0.5rem",
          fontFamily: "Roboto",
        }} href="https://www.linkedin.com/in/matiaslapolla/" target='_blank' rel="noreferrer">LinkedIn</a>
      </Grid>
    </>
  )
}

export default FooterComponent