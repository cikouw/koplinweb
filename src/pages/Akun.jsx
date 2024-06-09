import React from "react";
import { BottomTab, HeaderAkun } from "../components";

const Akun = () => {
  return (
    <>
      <HeaderAkun />
      <br />
      <h4>Disinilah pembukuan kolektor seperti : </h4>
      <h4>Saldo akhir, target, murni , storting dan sebagainya.</h4>
      <BottomTab />
    </>
  );
};

export default Akun;
