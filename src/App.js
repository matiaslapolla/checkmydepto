import { Grid, Link, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Grid
        container
        py={2}
        px={2}
        border={1}
        borderColor={"lightgray"}
        borderRadius={2}
      >
        <Grid item xs={1} spacing={3}>
          <Link underline="none" href="/about">
            <Typography variant="p">About</Typography>
          </Link>
        </Grid>
        <Grid item xs={1} spacing={3}>
          <Link underline="none" href="/contact">
            <Typography variant="p">Contact</Typography>
          </Link>
        </Grid>
        <Grid item xs={1} spacing={3}>
          <Link underline="none" href="/signin">
            <Typography variant="p">Sign In</Typography>
          </Link>
        </Grid>
        <Grid item xs={1} spacing={3}>
          <Link underline="none" href="/signup">
            <Typography variant="p">Sign Up</Typography>
          </Link>
        </Grid>
        <Grid item xs={1} spacing={3}>
          <Link underline="none" href="/">
            <Typography variant="p">Home</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
