import { Grid, Typography } from "@mui/material";
import React from "react";
import apartmentSearch from "../../Assets/house_search.png";

const About = () => {


  console.log("About");

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(150, 200, 250, 0.5)",
          backgroundImage: `url(${apartmentSearch})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Grid mt={12} container justifyContent={{
          xs: "center",
          sm: "center",
          md: "flex-start",
        }} flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
        }}>
          <Grid
            container
            flexWrap={{
              xs: "wrap",
              sm: "wrap",
              md: "nowrap",
            }}
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "2rem",
              borderRadius: "1rem",
              gap: "2rem",
            }}
          >
            <Grid
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "1rem",
                backdropFilter: "blur(8px)",
              }} container item p={4} flexDirection={"column"} gap={4}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                What's CheckMyDepto?
              </Typography>
              <Typography variant="body1" sx={{}}>
                At CheckMyDepto, our goal is to help you find your next ideal home. We are an online platform that connects property owners with people searching for their next apartment. We focus on providing an intuitive and convenient experience for you to explore a wide selection of housing options.
              </Typography>
            </Grid>
            <Grid sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "1rem",
              backdropFilter: "blur(8px)",
            }} container p={4} flexDirection={"column"} gap={4}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                How CheckMyDepto works?
              </Typography>
              <Typography variant="body1" sx={{}}>
                Calling all property owners! Experience the power of CheckMyDepto - effortlessly publish your properties, attract a targeted audience, and outshine the competition.
              </Typography>
              <Typography variant="body1" sx={{}}>
                Seeking your dream depto? Dive into curated options, customize your search, and engage directly with owners. Let CheckMyDepto be your key to unlocking the perfect living space.
              </Typography>
              <Typography variant="body1" sx={{}}>
                Join the revolution today - where success meets satisfaction. CheckMyDepto: Empowering property owners, fulfilling dreams.
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "1rem",
                backdropFilter: "blur(8px)",
              }} container item p={4} flexDirection={"column"} gap={4}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                What's a Depto?
              </Typography>
              <Typography variant="body1" sx={{}}>
                Depto is your new favorite place to be in. It's your home, your sanctuary, your office, your gym, it's your place of comfort. It's not just any other apartment. It's your depto.
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid
            container
            flexDirection={{
              xs: "column",
              sm: "column",
              md: "column",
            }}
            maxWidth={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "50%",
            }}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
            <Grid sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "1rem",
              backdropFilter: "blur(8px)",
            }} container p={4} flexDirection={"column"} gap={4}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                How CheckMyDepto works?
              </Typography>
              <Typography variant="body1" sx={{  }}>
                Calling all property owners! Experience the power of CheckMyDepto - effortlessly publish your properties, attract a targeted audience, and outshine the competition.
              </Typography>
              <Typography variant="body1" sx={{  }}>
                Seeking your dream depto? Dive into curated options, customize your search, and engage directly with owners. Let CheckMyDepto be your key to unlocking the perfect living space.
              </Typography>
              <Typography variant="body1" sx={{  }}>
                Join the revolution today - where success meets satisfaction. CheckMyDepto: Empowering property owners, fulfilling dreams.
              </Typography>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default About;
