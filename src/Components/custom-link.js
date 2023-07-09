import { Grid, Link, Typography } from "@mui/material"

const CustomLink = (props) => {
  return (
    <Grid item xs={"auto"}>
      <Link underline="none" href={props?.linkPath}>
        {
          props?.image ?
            <img src={props?.image} alt={props?.linkTitle} style={{
              height: "32px",
              marginTop: "8px",
            }} />
            :
            <Typography
              sx={{
                "&:hover": {
                  color: "orange",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out"
                }
              }}
              color={"black"}
              variant="body1"
              fontWeight={"bold"}
            >
              {props?.linkTitle}
            </Typography>
        }
      </Link>
    </Grid>
  )
}

export default CustomLink