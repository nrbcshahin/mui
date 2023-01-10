import { Grid, TextField, Box, Button, Checkbox } from "@mui/material";
import LoginBg from "../../assets/images/login-bg.svg";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <Grid container>
        <Grid item xs={9.3}>
          <div className="login-left">
            <img src={LoginBg} loading="lazy" alt="NRBC" />
          </div>
        </Grid>
        <Grid item xs={2.7}>
          <div className="login-form">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
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
                name="userName"
                {...register("userName", { required: true })}
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
                name="password"
                {...register("password", { required: true })}
                sx={{
                  mb: 2,
                }}
              />
              <Checkbox
                label="Remember me"
                size="medium"
                color="primary"
                sx={{
                  mb: 5,
                  ml: -1.5,
                }}
              />
              <Button type="submit" variant="contained" size="large" fullWidth>
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
