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
      <div className="content">
        <p>
          <strong>Nama: </strong>
          {anggota.nama}
        </p>
        <p>
          <strong>Alamat: </strong>
          {anggota.alamat}
        </p>

        <p>
          <strong>Angsuran: </strong>
          {anggota.angsuran}
        </p>
        <p>
          <strong>Tanggal: </strong>
          {anggota.tanggal}
        </p>
      </div>
      <br />
      <h4>Disinilah transaksi pembayaran setoran nasabah</h4>
    </div>
  );
};

export default DetailAngsuran;
