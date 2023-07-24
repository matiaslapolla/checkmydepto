import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const textStyleObject = {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "orange",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "green",
  },
  "& .MuiOutlinedInput-input": {
    color: "black",
  },
  "& .MuiInputLabel-outlined": {
    color: "black",
  },
  "&:hover .MuiOutlinedInput-input": {
    color: "black",
  },
  "&:hover .MuiInputLabel-outlined": {
    color: "green",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    color: "green",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "green",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "green",
  },
}


const Contact = () => {

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message Sent")
  }

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }


  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: '#FF800035',
        minHeight: '100vh',
      }}
    >
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ color: 'black' }} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#black' }} gutterBottom>
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </Typography>
          <Grid container spacing={2} flexDirection={{
            xs: "column",
            sm: "column",
            md: "row",
          }}>
            <Grid container p={1} xs={12} sm={12} md={6} flexDirection={"column"}>
              <Grid item p={1}>
                <TextField name="name" onChange={handleChange} fullWidth placeholder="Name" sx={textStyleObject} />
              </Grid>
              <Grid item p={1}>
                <TextField name="email" onChange={handleChange} required fullWidth placeholder="Email" sx={textStyleObject} />
              </Grid>
              <Grid item p={1}>
                <TextField name="subject" onChange={handleChange} fullWidth placeholder="Subject" sx={textStyleObject} />
              </Grid>
            </Grid>

            <Grid container p={1} xs={12} sm={12} md={6} justifyContent={"center"}>
              <Grid item xs={12} p={1}>
                <TextField name="message" onChange={handleChange} fullWidth required placeholder="Message" multiline rows={4} sx={textStyleObject} />
              </Grid>
              <Grid container justifyContent={"center"} p={2}>
                <Button variant='contained' sx={{
                  backgroundColor: "orange", "&:hover": {
                    backgroundColor: "green",
                  }
                }} type="submit">Send Message</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Contact