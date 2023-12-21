import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Stepperform from "./pages/Stepperform";
import Product from "./pages/sales/Listproduct";
import Addproduct from "./pages/sales/Addproduct";
import { ToastContainer } from "react-toastify";

const App = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  let token = sessionStorage.getItem("token");
  useEffect(() => {
    if (location.pathname === "/") {
      sessionStorage.clear();
    }

    location.pathname === "/List" && !token
      ? Navigate("/")
      : Navigate(`${location.pathname}`);

    location.pathname === "/Stepperform" && !token
      ? Navigate("/")
      : Navigate(`${location.pathname}`);

    location.pathname === "/Product" && token
      ? Navigate("/")
      : Navigate(`${location.pathname}`);
  }, [location.pathname]);

  return (
    <>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="" element={<Login />} />
          {token && <Route path="/List" element={<List />} />}
          {token && <Route path="/Stepperform" element={<Stepperform />} />}

          {!token && (
            <>
              <Route path="/Product" element={<Product />} />
              <Route path="/Add-product" element={<Addproduct />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
