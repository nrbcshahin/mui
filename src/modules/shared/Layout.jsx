import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Navigation />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
