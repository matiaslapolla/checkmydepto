import { Grid } from "@mui/material";
import CustomLink from "./custom-link";
import { TopBarRoutes } from "../Contents/topbar-routes-array";

export const TopBarComponent = () => {

  return (
    <>
      <Grid
        container
        py={2}
        px={8}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          backdropFilter: "blur(10px)",
        }}
      >
        {
          TopBarRoutes.map((route, index) => { return <CustomLink key={index} linkPath={route.linkPath} linkTitle={route.linkTitle} /> }
          )
        }
      </Grid>
    </>
  );
}
