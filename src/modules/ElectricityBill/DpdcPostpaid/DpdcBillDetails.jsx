import { Box, Button } from "@mui/material";
import DpdcBillInfo from "./DpdcBillInfo";

const DpdcBillDetails = () => {
  return (
    <div>
      <Box
        className="title-box"
        sx={{
          mt: 1.2,
        }}
      >
        <DpdcBillInfo />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: 1,
            mt: 0.5,
            mb: 1.5,
          }}
        >
          <Button variant="contained" color="error">
            Cancel Payment
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              ml: 1,
            }}
          >
            Confirm Payment
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default DpdcBillDetails;
