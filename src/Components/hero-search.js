import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const HeroSearch = () => {

  const locations = [
    {
      title: "New York",
      value: "new-york",
      id: 1
    },
    {
      title: "Los Angeles",
      value: "los-angeles",
      id: 2
    },
    {
      title: "Chicago",
      value: "chicago",
      id: 3
    },
  ]

  return (
    <>
      <Grid sx={{
        position: "absolute",
        zIndex: 5,
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        backgroundColor: "white",
        borderRadius: 2,
        gap: 2,
        "&:hover": {
          transition: "all 0.2s ease-in-out",
        }

      }}>
        <Autocomplete
          options={locations}
          renderOption={(props, option) => {
            return (
              <Grid {...props} key={option.id}>
                <Typography>{option.title}</Typography>
              </Grid>
            )
          }}
          getOptionLabel={(option) => option.title}
          sx={{
            width: 300, backgroundColor: "white",
            "&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "& .MuiOutlinedInput-input": {
              color: "orange",
            },
            "& .MuiInputLabel-outlined": {
              color: "orange",
            },
            "&:hover .MuiOutlinedInput-input": {
              color: "orange",
            },
            "&:hover .MuiInputLabel-outlined": {
              color: "orange",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "orange",
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
              color: "orange",
            },

          }}
          renderInput={(params) => <TextField {...params} label="Type in a city..." />}
        />
      </Grid>
    </>
  )
}

export default HeroSearch