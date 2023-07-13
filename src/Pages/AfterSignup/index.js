import React from 'react'
import background from '../../Assets/apartment_illustration_2.jpg'
import { Button, Grid, Typography } from '@mui/material'

const AfterSignup = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100vh',
          border: '1px solid black',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid item height={"fit-content"} sx={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '2rem',
        }} >
          <Typography
            variant="h2"
            gutterBottom
            fontWeight={"bold"}
            color={"black"}
            textAlign={"center"}
          >
            ¡You have successfully signed in!
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight={"bold"}
            color={"black"}
          >
            If you can see this, it means you have successfully signed in. Congratulations!
            As this project does not use a backend, this is just a dummy page.
            If you click the button below, you will be redirected to the home page.
          </Typography>
        </Grid>
        <Button variant="contained" href="/" size='large' sx={{
          marginTop: '2rem',
          backgroundColor: 'orange',
          "&:hover": {
            backgroundColor: 'green',
            transition: "all 0.2s ease-in-out"
          }
        }}>
          Go to home page
        </Button>
      </Grid>
    </>
  )
}

export default AfterSignup