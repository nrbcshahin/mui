import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = (prop) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.modal + 1 }}
      open={prop.loading}
    >
      <CircularProgress thickness={5} color="inherit" size="5rem" value={80} />
    </Backdrop>
  );
};

export default Spinner;
