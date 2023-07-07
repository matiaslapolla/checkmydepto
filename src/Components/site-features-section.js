import React from 'react'
import compare_posts from '../Assets/compare_posts.png'
import watch_comments from '../Assets/watch_comments.png'
import budget from '../Assets/budget.png'
import { Grid, Typography } from '@mui/material'

const SiteFeaturesSection = () => {
  return (
    <>
      <Grid sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        padding: 4,
        marginTop: 8
      }}>

        <Grid container sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
          <Grid item xs={12} md={5} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img src={compare_posts} alt={"compare posts"} width={424} />
          </Grid>
          <Grid item xs={12} md={5} sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 4,
          }}
          >
            <Typography variant="h4" component="h4">
              Compare apartments
            </Typography>
            <Typography variant="body1">
              Find your ideal home effortlessly. Compare prices, amenities, and locations with RentCompare's intuitive platform. Say goodbye to endless scrolling and hello to your dream apartment!
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
          <Grid item xs={12} md={5} sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 4,
          }}
          >
            <Typography variant="h4" component="h4">
              View Verified Reviews
            </Typography>
            <Typography variant="body1">
              Transparency matters. Explore real tenant reviews on RentCompare. Get valuable insights to make an informed choice for your next home.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img src={watch_comments} alt={"compare posts"} width={424} />
          </Grid>
        </Grid>

        <Grid container sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
          <Grid item xs={12} md={5} sx={{
            display: "flex",
          }}>
            <img src={budget} alt={"compare posts"} width={424} />
          </Grid>
          <Grid item xs={12} md={5} sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 4,
          }}
          >
            <Typography variant="h4" component="h4">
              Fit your budget!
            </Typography>
            <Typography variant="body1">
              Don't compromise on your budget. Match with apartments that fit your financial goals. Discover your ideal space today!
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default SiteFeaturesSection