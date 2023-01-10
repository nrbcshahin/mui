import {
  Grid,
  TextField,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "./Spinner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    fetch("https://api.github.com/gists", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Spinner loading={loading} />
      <Grid container>
        <Grid item xs={9.3}>
          <div className="login-left"></div>
        </Grid>
        <Grid item xs={2.7}>
          <div className="login-form">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                pt: 15,
                ml: 3,
                mr: 3,
              }}
            >
              <h2>Login</h2>
              <TextField
                fullWidth
                label="Username"
                size="small"
                variant="outlined"
                {...register("userName", { required: true })}
                error={!!errors.userName}
                sx={{
                  mb: 3,
                  mt: 5,
                }}
              />
              <TextField
                fullWidth
                size="small"
                label="Password"
                type="password"
                variant="outlined"
                {...register("password", { required: true })}
                error={!!errors.password}
                sx={{
                  mb: 2,
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 7,
                }}
                onClick={handleSubmit(onSubmit)}
              >
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
