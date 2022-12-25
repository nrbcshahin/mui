import { AppBar, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

const Navigation = () => {
  return (
    <div className="left-nav">
      <AppBar position="static" sx={{ bgcolor: "#193053" }}>
        <Toolbar variant="dense">
          <AdbIcon sx={{ mr: 1 }} />
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

export default Navigation;
