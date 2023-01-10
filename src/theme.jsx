import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264982",
    },
  },
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          color: "#777777",
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        sx: {
          ml: 0,
          color: "#ed0537",
        },
      },
    },
  },
});

export default theme;
