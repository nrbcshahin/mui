import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./Header";
import Navigation from "./Navigation";


const Layout = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Navigation />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <div className="container">
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
