import { Button, Grid, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import contactImage from '../../Assets/contact_image.jpg'

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
        <form>
          <Typography variant="h4" sx={{ color: 'black' }} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#black' }} gutterBottom>
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </Typography>
          <Grid container spacing={2}>
            <Grid container p={1} xs={6} flexDirection={"column"}>
              <Grid item p={1}>
                <TextField fullWidth placeholder="Name" sx={textStyleObject} />
              </Grid>
              <Grid item p={1}>
                <TextField fullWidth placeholder="Email" sx={textStyleObject} />
              </Grid>
              <Grid item p={1}>
                <TextField fullWidth placeholder="Subject" sx={textStyleObject} />
              </Grid>
            </Grid>

            <Grid container p={1} xs={6} justifyContent={"center"}>
              <Grid item xs={12} p={1}>
                <TextField fullWidth placeholder="Message" multiline rows={4} sx={textStyleObject} />
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