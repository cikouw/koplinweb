// DetailAngsuran.js
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../headers/Header";
import { dummyNasabah } from "../../data/Nasabah";

const DetailAngsuran = () => {
  const { id } = useParams();
  const anggota = dummyNasabah.find((nasabah) => nasabah.id === parseInt(id));

  if (!anggota) {
    return <div>Anggota tidak ditemukan</div>;
  }

  return (
    <div>
      <Header
        iBack={true}
        iBackPath="/"
        title={`${anggota.nama} - (${anggota.alamat})`}
      />
      <br />
      <h4>Disinilah transaksi pembayaran setoran nasabah</h4>
    </div>
  );
};

export default DetailAngsuran;
