import { Grid, Link, Typography } from '@mui/material'
import React from 'react'

const FooterComponent = () => {
  return (
    <>
      <Grid display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{
        fontSize: "1.5rem",
        fontWeight: "normal",
        fontFamily: "Roboto",
        color: "grey",
        "&:hover": {
          color: "darkblue",
          transition: "all 0.5s ease",
        }
      }} minHeight={64} justifyContent={"center"}>
        <Link
          sx={{
            color: "grey",
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": {
              color: "#3f51b5",
            }
          }
          }
          href="https://www.linkedin.com/in/matiaslapolla/" target='_blank' rel="noreferrer">Matias Lapolla - LinkedIn</Link>
      </Grid>
    </>
  )
}

export default FooterComponent