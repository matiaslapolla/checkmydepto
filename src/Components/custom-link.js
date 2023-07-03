import { Grid, Link, Typography } from "@mui/material"

const CustomLink = (props) => {
  return (
    <Grid item xs={"auto"}>
      <Link underline="none" href={props?.linkPath}>
        <Typography sx={{
          "&:hover": {
            color: "cadetblue",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out"
          }
        }} color={"black"} variant="body1">{props?.linkTitle}</Typography>
      </Link>
    </Grid>
  )
}

export default CustomLink