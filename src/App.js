import "./assets/styles/main.scss";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".2rem",
              color: "inherit",
            }}
          >
            COLLECTION
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton size="medium" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          ee
        </Grid>
        <Grid item xs={10}>
          ee
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
