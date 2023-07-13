import { Button, Drawer, Grid, IconButton, useMediaQuery } from "@mui/material";
import CustomLink from "./custom-link";
import { TopBarRoutes } from "../Contents/topbar-routes-array";
import { useState } from "react";
import { Close, DensityMedium } from "@mui/icons-material";

export const TopBarComponent = () => {

  const isMobile = useMediaQuery('(max-width:600px)')
  const isTablet = useMediaQuery('(max-width:960px)')
  // const isDesktop = useMediaQuery('(min-width:960px)')
  // const isLargeDesktop = useMediaQuery('(min-width:1280px)')
  // const isExtraLargeDesktop = useMediaQuery('(min-width:1920px)')
  // const is4k = useMediaQuery('(min-width:2560px)')
  // const is8k = useMediaQuery('(min-width:3840px)')

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen)
    console.log(sidebarOpen)
  }

  return (
    <>
      {
        (isMobile || isTablet) ? <>
          <Grid
            container
            p={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              top: 0,
              position: "fixed",
              backgroundColor: "white",
              zIndex: 1000,
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <DensityMedium fontSize={"24px"} color="black" />
            </IconButton>
          </Grid>
          <Drawer
            anchor={"left"}
            open={sidebarOpen}
            sx={{
              "& .MuiDrawer-paper": {
                width: "40%",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              },
            }}
          >
            <Button
              sx={{
                position: "relative",
                top: 0,
                right: 0,
                margin: 2,
                backgroundColor: "orange",
                color: "black",
                borderRadius: 2,
                border: 0,
                width: "fit-content",
                height: "fit-content",
                "&:hover": {
                  backgroundColor: "red",
                  color: "white",
                  border: 0,
                },
              }}
              variant="outlined"
              onClick={toggleDrawer}
            >
              <Close color="black" />
            </Button>
            <Grid container
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={2}
              p={2}
            >
              {
                TopBarRoutes.map((route, index) => { return <CustomLink key={index} linkPath={route.linkPath} linkTitle={route.linkTitle} image={route.logoImage} /> }
                )
              }
            </Grid>
          </Drawer>
        </> : <>
          <Grid
            container
            py={2}
            px={4}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              position: "fixed",
              backgroundColor: "white",
              zIndex: 1000,
            }}
          >
            {
              TopBarRoutes.map((route, index) => { return <CustomLink key={index} linkPath={route.linkPath} linkTitle={route.linkTitle} image={route.logoImage} /> }
              )
            }
          </Grid>
        </>
      }
    </>
  );
}

