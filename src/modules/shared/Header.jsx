import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
            }}
          >
            COLLECTION
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
