import "./assets/styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import DescoBillList from "./modules/ElectricityBill/DescoPostpaid/DescoBillList";
import DpdcBillList from "./modules/ElectricityBill/DpdcPostpaid/DpdcBillList";
import NescoBillList from "./modules/ElectricityBill/NescoPostpaid/NescoBillList";
import KarnaphuliBillList from "./modules/GasBill/Karnaphuli/KarnaphuliBillList";
import RebBillList from "./modules/ElectricityBill/RebPostpaid/RebBillList";
import Welcome from "./modules/Dashboard/Welcome";
import Error from "./modules/Shared/Error";
import Layout from "./modules/Shared/Layout";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Login from "./modules/Shared/Login";
=======
import DescoBillList from "./modules/electricity/desco/BillList";
import KarnaphuliBillList from "./modules/gas/karnaphuli/BillList";
import Welcome from "./modules/dashboard/Welcome";
import Error from "./modules/shared/Error";
import Layout from "./modules/shared/Layout";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

>>>>>>> e91b6fb3b9b56b730bbc9ca4a625f2ca90acc643

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/electricity-bill/reb-postpaid/bill-list" element={<RebBillList />} />
            <Route path="/electricity-bill/nesco-postpaid/bill-list" element={<NescoBillList />} />
            <Route path="/electricity-bill/dpdc-postpaid/bill-list" element={<DpdcBillList />} />
            <Route path="/electricity-bill/desco-postpaid/bill-list" element={<DescoBillList />} />
            <Route path="/electricity-bill/karnaphuli/bill-list" element={<KarnaphuliBillList />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
