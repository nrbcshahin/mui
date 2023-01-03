import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner";

const DpdcBillList = () => {
  const navigate = useNavigate();
  const [billData, setBillData] = useState([]);
  const [loading, setLoading] = useState(true);

  const btnNewBill = () => {
    navigate("/electricity-bill/dpdc-postpaid/new-bill");
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((x) => x.json())
      .then((x) => setBillData(x.data))
      .then(setLoading(false));
  }, []);

  const columns = [
    { field: "first_name", headerName: "Name", width: 150 },
    { field: "last_name", headerName: "Country", width: 150 },
    { field: "id", headerName: "Country", width: 150 },
    { field: "avatar", headerName: "Country", width: 150 },
  ];

  return (
    <div>
      <Spinner loading={loading} />
      <Box className="title-box">
        <h1>
          DPDC Postpaid Bill List
          <Button
            onClick={btnNewBill}
            sx={{ float: "right" }}
            size="small"
            variant="outlined"
            color="info"
          >
            Back to List
          </Button>
        </h1>
        <DataGrid
          rows={billData}
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
