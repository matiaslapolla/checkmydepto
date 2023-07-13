import { Button, Grid, TextField, Typography } from '@mui/material'
import background from '../../Assets/apartment_illustration_2.jpg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      navigate('/aftersignin')
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
                  type="email"
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
                  type="password"
                  fullWidth
                  autoComplete="password"
                  error={formData.passwordError}
                />
                <Typography variant="body2" gutterBottom mt={2} maxWidth={"24ch"}>
                  Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one number.
                </Typography>
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