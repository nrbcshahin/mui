import { Grid, TextField, Box, Button } from "@mui/material";
import LoginBg from "../../assets/images/login-bg.svg";

const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={9}>
          <div className="login-left">
            <img src={LoginBg} loading="lazy" alt="NRBC" />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="login-form">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                pt: 10,
                ml: 3,
                mr: 3,
              }}
            >
              <h2>Login</h2>
              <TextField
                fullWidth="true"
                label="Username"
                autoComplete="off"
                size="medium"
                variant="outlined"
                sx={{
                  mb: 2,
                }}
              />
              <TextField
                fullWidth="true"
                size="medium"
                label="Password"
                type="password"
                autoComplete="off"
                variant="outlined"
                sx={{
                  mb: 5,
                }}
              />
              <Button variant="contained" size="large" fullWidth="true">
                LOGIN
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
