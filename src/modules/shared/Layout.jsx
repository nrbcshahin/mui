import { Outlet } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Header from "./Header";
import Navigation from "./Navigation";
import LinearProgress from "@mui/material/LinearProgress";

const Layout = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Navigation />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="primary" />
          </Box>
          <div className="container">
          <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
