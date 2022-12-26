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
  },
});

export default theme;
