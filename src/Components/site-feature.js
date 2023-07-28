import { Grid, Typography } from '@mui/material'
import React from 'react'

const SiteFeature = ({
  title,
  description,
  image,
  reverse = false,
  reverseMobile = false,
}) => {
  return (
    <Grid container item xs={12} md={8}
      flexDirection={
        {
          xs: reverseMobile === true ? "column-reverse" : "column",
          md: reverse === true ? "row-reverse" : "row"
        }
      }
      gap={
        { xs: 12 }
      }
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid item xs={12} md={4} sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <img src={image} alt={"some alt"} width={300} />
      </Grid>
      <Grid item xs={12} md={4} alignItems={
        "center"
      } sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingX: 8,
      }}
      >
        <Grid sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
          <Typography variant="h4" component="h4" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant="body1" component="p" width={"35ch"}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SiteFeature