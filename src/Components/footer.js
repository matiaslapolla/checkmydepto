import { Grid, Typography } from '@mui/material'
import React from 'react'

const FooterComponent = () => {
  return (
    <>
      <Grid container flexDirection={"column"} alignItems={"center"} sx={{ backgroundColor: "#dedede" }}>
        <Typography variant="button">Footer</Typography>
      </Grid>
    </>
  )
}

export default FooterComponent