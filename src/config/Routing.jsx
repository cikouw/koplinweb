import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Akun, Login, Nasabah, Register } from "../pages";
import Performa from "../components/screens/Performa";

const Routing = () => {
  return (
    <Router basename="/koplinweb/">
      <Routes>
        <Route path="/" element={<Nasabah />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/performa" element={<Performa />} />
      </Routes>
    </Router>
  );
};

export default Routing;
