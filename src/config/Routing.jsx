import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Akun, Login, Nasabah, Register } from "../pages";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nasabah />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Routing;
