import { Button, Grid, TextField, Typography } from '@mui/material'
import background from '../../Assets/apartment_illustration_2.jpg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    emailError: false,
    passwordError: false,
  })

  const validateEmail = (email) => {
    let isValid = true
    if (email === '') {
      isValid = false
    } else {
      const re = /\S+@\S+\.\S+/
      isValid = re.test(email)
    }
    return isValid
  }

  const validatePassword = (password) => {
    let isValid = true
    if (password === '') {
      isValid = false
    }

    if (password.length < 8 || password.length > 16) {
      isValid = false
    }

    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    isValid = re.test(password)

    return isValid
  }

  const verifyFields = () => {
    let emailError = false
    let passwordError = false

    if (!validateEmail(formData.email)) {
      emailError = true
    }

    if (!validatePassword(formData.password)) {
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
    console.log(formData)
    if (isFormValid) {
      navigate('/aftersignup')
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
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Grid my={16} height={"100vh"}>
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
              <Typography variant="h5" mb={4} fontWeight={"bold"}>
                Create your account
              </Typography>
              <Grid
                container
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item xs={12} container spacing={3} flexDirection={"column"}>
                  <Grid item xs={12}>
                    <TextField
                      value={formData.firstName}
                      onChange={handleFormChange}
                      id="firstName"
                      name="firstName"
                      label="First name"
                      type="text"
                      fullWidth
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={formData.lastName}
                      onChange={handleFormChange}
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      type="text"
                      fullWidth
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={formData.username}
                      onChange={handleFormChange}
                      id="username"
                      name="username"
                      label="Username"
                      type="text"
                      fullWidth
                      autoComplete="off"
                      error={formData.emailError}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} container spacing={3}>
                  <Grid item xs={12} mt={3}>
                    <TextField
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth
                      autoComplete="off"
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
                      type="password"
                      fullWidth
                      autoComplete="off"
                      error={formData.passwordError}
                    />
                  </Grid>
                </Grid>
                <Typography sx={{ my: "32px" }} justifySelf={"center"} variant="body2" gutterBottom mt={2} maxWidth={"44ch"}>
                  Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one number.
                </Typography>
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
                    Sign Up
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
                Already have an account? <a style={{ textDecoration: "none" }} href="/signin">Sign In</a>
              </Typography>
            </Grid>
          </form>
        </Grid>
      </Grid >
    </>

  )
}

export default Signup