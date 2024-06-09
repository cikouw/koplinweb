import React from "react";
import { useState, useEffect } from "react";
import { dummyNasabah } from "../data/Nasabah";
import { BottomTab, TopTab, AnggotaList, Footer } from "../components";

const Nasabah = () => {
  const [totalAnggota, setTotalAnggota] = useState(0);
  const [totalAngsuran, setTotalAngsuran] = useState(0);

  useEffect(() => {
    setTotalAnggota(dummyNasabah.length);
    const total = dummyNasabah.reduce((sum, anggota) => {
      const amount = parseInt(anggota.angsuran.replace(/\D/g, ""));
      return sum + amount;
    }, 0);
    setTotalAngsuran(total);
  }, [dummyNasabah]);
  return (
    <>
      <TopTab totalAnggota={totalAnggota} totalAngsuran={totalAngsuran} />
      <AnggotaList anggotas={dummyNasabah} />
      <Footer />
      <BottomTab />
    </>
  );
};

export default Nasabah;
