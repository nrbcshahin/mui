import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DpdcBillList = () => {
  const navigate = useNavigate();

  const BtnNewBill = () => {
    navigate("/electricity-bill/dpdc-postpaid/new-bill");
  };

  const rows = [
    { id: 1, col1: "Hello", col2: "World", col3: "Shahin", col4: "Sumon" },
    {
      id: 2,
      col1: "DataGridPro",
      col2: "is Awesome",
      col3: "Shahin",
      col4: "Sumon",
    },
    { id: 3, col1: "MUI", col2: "is Amazing", col3: "Shahin", col4: "Sumon" },
    { id: 4, col1: "MUI", col2: "is Amazing", col3: "Shahin", col4: "Sumon" },
    { id: 5, col1: "MUI", col2: "is Amazing", col3: "Shahin", col4: "Sumon" },
    { id: 6, col1: "MUI", col2: "is Amazing", col3: "Shahin", col4: "Sumon" },
    { id: 7, col1: "MUI", col2: "is Amazing", col3: "Shahin", col4: "Sumon" },
    { id: 8, col1: "MUI", col2: "is Amazing", col3: "Shahin", col4: "Sumon" },
  ];

  const columns = [
    { field: "col1", headerName: "Name", width: 150 },
    { field: "col2", headerName: "Country", width: 150 },
    { field: "col3", headerName: "Country", width: 150 },
    { field: "col4", headerName: "Country", width: 150 },
  ];

  return (
    <div>
      <Box className="title-box">
        <h1>
          DPDC Postpaid Bill List
          <Button
            onClick={BtnNewBill}
            sx={{ float: "right" }}
            size="small"
            variant="outlined"
            color="info"
          >
            Back to List
          </Button>
        </h1>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={true}
          headerHeight={40}
          rowHeight={35}
          rowsPerPageOptions={[20, 50, 100]}
          sx={{
            m: 1,
          }}
        />
      </Box>
    </div>
  );
};

export default DpdcBillList;
