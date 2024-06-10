import React from "react";
import { BottomTab, FormulirDrop, Header } from "../components";

const Drop = () => {
  return (
    <div>
      <Header title={"Pengajuan Nasabah Baru"} />
      <br />
      <h4>Disinilah setiap nasabah didata </h4>
      <h4>setiap kali mengajukan pinjaman</h4>
      <FormulirDrop />
      <BottomTab />
    </div>
  );
};

export default Drop;
