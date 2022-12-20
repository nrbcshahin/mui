import "./assets/styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DescoBillList from "./modules/electricity/desco/BillList";
import KarnaphuliBillList from "./modules/gas/karnaphuli/BillList";
import Welcome from "./modules/dashboard/Welcome";
import Error from "./modules/shared/Error";
import Layout from "./modules/shared/Layout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/desco" element={<DescoBillList />} />
            <Route path="/karnaphuli" element={<KarnaphuliBillList />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
