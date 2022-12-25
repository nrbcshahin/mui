import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          color : "#777777"
        },
      },
    }
  },
});

export default theme;
