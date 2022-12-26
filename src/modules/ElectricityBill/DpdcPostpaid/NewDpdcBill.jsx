import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import DpdcBillInfo from "./DpdcBillInfo";

const NewDpdcBill = () => {
  const navigate = useNavigate();

  const BtnBackToList = () => {
    navigate("/electricity-bill/dpdc-postpaid/bill-list");
  };

  return (
    <div>
      <Spinner/>
      <Box className="title-box">
        <h1>
          DPDC Postpaid Bill Inqury
          <Button
            onClick={BtnBackToList}
            sx={{ float: "right" }}
            size="small"
            variant="outlined"
            color="info"
          >
            Back to List
          </Button>
        </h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
            padding: 1,
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField label="Bill Period" size="small" />
            <TextField label="Customer No" size="small" />
            <Button
              variant="contained"
              color="info"
              sx={{
                mt: 1,
                ml: 1,
                height: "36px",
              }}
            >
              Bill Inquiry
            </Button>
          </div>
        </Box>
      </Box>
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
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              ml: 1,
            }}
          >
            Payment
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default NewDpdcBill;
