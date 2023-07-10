import React from 'react'
import comparePosts from '../Assets/compare-posts.png'
import watchComments from '../Assets/watch-comments.png'
import budget from '../Assets/budget.png'
import { Grid, Typography, useMediaQuery } from '@mui/material'
// Compare deptos
// Find your dream depto effortlessly with CheckMyDepto's intuitive platform. Easily compare prices, amenities, and locations, bringing you closer to the perfect abode that meets all your requirements.

const SiteFeaturesSection = () => {

  const isMobile = useMediaQuery('(max-width:600px)')
  const isTablet = useMediaQuery('(max-width:960px)')
  const isDesktop = useMediaQuery('(min-width:960px)')
  const isLargeDesktop = useMediaQuery('(min-width:1280px)')
  const isExtraLargeDesktop = useMediaQuery('(min-width:1920px)')
  const is4k = useMediaQuery('(min-width:2560px)')
  const is8k = useMediaQuery('(min-width:3840px)')

  return (
    <>
      {/* {
        <p>
          isMobile: {isMobile.toString()} <br />
          isTablet: {isTablet.toString()} <br />
          isDesktop: {isDesktop.toString()} <br />
          isLargeDesktop: {isLargeDesktop.toString()} <br />
          isExtraLargeDesktop: {isExtraLargeDesktop.toString()} <br />
          is4k: {is4k.toString()} <br />
          is8k: {is8k.toString()} <br />
        </p>
      } */}
      <Grid
        mt={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          padding: 4,
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(2px)",
          borderRadius: 2,
        }}
      >
        <Grid container item xs={12} sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4 },

        }}>
          <Grid item xs={12} md={4} sx={{
            display: "flex",
            justifyContent: "flex-end",

            paddingX: 8,
          }}>
            <img src={comparePosts} alt={"compare posts"} width={300} />
          </Grid>
          <Grid item xs={12} md={4} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
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
                Compare deptos
              </Typography>
              <Typography variant="body1" component="p" width={"35ch"}>
                Find your dream depto effortlessly with CheckMyDepto's intuitive platform. Easily compare prices, amenities, and locations, bringing you closer to the perfect abode that meets all your requirements.
              </Typography>
            </Grid>
          </Grid>

        </Grid>

        <Grid container item xs={12} sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4 },
          justifyContent: "center",
          alignItems: "center",

        }}>
          <Grid item xs={12} md={4} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
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
                View verified reviews
              </Typography>
              <Typography variant="body1" component="p" width={"35ch"}>
                When it comes to finding your next home, transparency is key. Dive into genuine reviews on CheckMyDepto and get the inside scoop to make a smart choice for your dream depto.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} sx={{
            display: "flex",
            justifyContent: "flex-start",

            paddingX: 8,
          }}>
            <img src={watchComments} alt={"compare posts"} width={300} />
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 4 },
          justifyContent: "center",
          alignItems: "center",

        }}>
          <Grid item xs={12} md={4} sx={{
            display: "flex",
            justifyContent: "flex-end",

            paddingX: 8
          }}>
            <img src={budget} alt={"compare posts"} width={300} />
          </Grid>

          <Grid item xs={12} md={4} sx={{
            display: "flex",
            alignItems: "flex-start",

            paddingX: 8,
          }}
          >
            <Grid sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}>
              <Typography sx={{
              }} variant="h4" component="h4" fontWeight={"bold"}>
                Fit your budget!
              </Typography>
              <Typography sx={{
              }} variant="body1" component="p" width={"35ch"}>
                Don't compromise on your budget. Match with apartments that fit your financial goals. Discover your ideal space today!
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default SiteFeaturesSection