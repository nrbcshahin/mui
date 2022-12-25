import React from "react";
import { AppBar, Toolbar, Box, IconButton, Badge } from "@mui/material";
import { Mail, Notifications, AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton size="large" edge="end">
              <Badge badgeContent={4} color="error">
                <Mail fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton size="large" edge="end" sx={{ marginLeft: 2 }}>
              <Badge badgeContent={17} color="primary">
                <Notifications fontSize="small" />
              </Badge>
            </IconButton>
          </Box>
          <Box>
            <IconButton size="large" edge="end" sx={{ marginLeft: 2 }}>
              <AccountCircle fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
