import { TextField, Box, Button } from "@mui/material";

const DpdcBillList = () => {
  return (
    <div>
      <Box>
        <div className="box-title">
          <h1>DPDC Postpaid Bill List</h1>
        </div>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField label="Bill Period" size="small" />
          <TextField label="Customer No" size="small" />
          <Button
            variant="contained"
            sx={{
              mt: 1,
              ml: 1,
              pt: 1,
              pb: 1,
            }}
          >
            Bill Inquiry
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default DpdcBillList;
