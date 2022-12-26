import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

const Spinner = () => {
  return (
    <div className="spinner">
      <LinearProgress color="primary" variant="outlined" size="large" />
    </div>
  );
};

export default Spinner;
