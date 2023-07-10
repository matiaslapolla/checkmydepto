import { Button, Grid, TextField, Typography } from '@mui/material'
import background from '../../Assets/apartment_illustration_2.jpg'
import React, { useState } from 'react'

const Signin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
  })

  const verifyFields = () => {
    let emailError = false
    let passwordError = false

    if (formData.email === '') {
      emailError = true
    }

    if (formData.password === '') {
      passwordError = true
    }

    setFormData({
      ...formData,
      emailError,
      passwordError,
    })

    if (emailError || passwordError) {
      return false
    }

    return true
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isFormValid = verifyFields()
    if (isFormValid) {
      console.log('form is valid')
    } else {
      console.log('form is invalid')
    }
  }

  return (
    <>
      <Grid sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        border: '1px solid black',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <form onSubmit={handleSubmit}>
          <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
          }}>
            <Typography variant="h6" gutterBottom fontWeight={"bold"}>
              Sign In
            </Typography>
            <Grid
              container
              spacing={3}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <TextField
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                  error={formData.emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={formData.password}
                  onChange={handleFormChange}
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="password"
                  error={formData.passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: 'orange',
                    "&:hover": {
                      backgroundColor: 'green',
                    },
                  }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
            marginTop: '1rem',
          }}>
            <Typography variant="body1">
              Don't have an account? <a style={{ textDecoration: "none" }} href="/signup">Sign Up</a>
            </Typography>
          </Grid>

          {
            <Grid sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              marginTop: '1rem',
            }}>
              <Typography variant="body1">
                Please fill out all fields
              </Typography>
            </Grid>
          }
        </form>
      </Grid>
    </>

  )
}

export default Signin