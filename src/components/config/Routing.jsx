import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Akun, Drop, Login, Nasabah, Register } from "../pages";
import { Performa, DetailAngsuran } from "../components";

const Routing = () => {
  return (
    <Router basename="/koplinweb/">
      <Routes>
        <Route path="/" element={<Nasabah />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/performa" element={<Performa />} />
        <Route path="/detail_angsuran/:id" element={<DetailAngsuran />} />
      </Routes>
    </Router>
  );
};

export default Routing;
