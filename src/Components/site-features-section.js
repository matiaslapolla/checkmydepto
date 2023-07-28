import React from 'react'
import comparePosts from '../Assets/compare-posts.png'
import watchComments from '../Assets/watch-comments.png'
import budget from '../Assets/budget.png'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import SiteFeature from './site-feature'

const SiteFeaturesSection = () => {

  return (
    <>
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

        <SiteFeature
          title={"Compare deptos"}
          description={"Find your dream depto effortlessly with CheckMyDepto's intuitive platform. Easily compare prices, amenities, and locations, bringing you closer to the perfect abode that meets all your requirements."}
          image={comparePosts}
          reverseMobile={false}
          reverse={false}
        />

        <SiteFeature
          title={"View verified reviews"}
          description={"When it comes to finding your next home, transparency is key. Dive into genuine reviews on CheckMyDepto and get the inside scoop to make a smart choice for your dream depto."}
          image={watchComments}
          reverseMobile={false}
          reverse={true}
        />

        <SiteFeature
          title={"Fit your budget!"}
          description={"Don't compromise on your budget. Match with apartments that fit your financial goals. Discover your ideal space today!"}
          image={budget}
          reverseMobile={false}
          reverse={false}
        />

      </Grid>
    </>
  )
}

export default SiteFeaturesSection