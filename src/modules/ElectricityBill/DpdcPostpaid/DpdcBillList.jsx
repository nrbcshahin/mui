import { TextField, Box, Button } from "@mui/material";

const DpdcBillList = () => {
  return (
    <div>
      <h2>DPDC Postpaid Bill List</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField label="Multiline" size="small" />
          <TextField label="Customer No" size="small" />
          <Button
            variant="contained"
            sx={{
              mt: 1,
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
