import React from "react";
import "./Nasabah.css";

const Anggota = ({ nama, angsuran, tanggal, alamat, sobekan }) => {
  return (
    <div className="anggota">
      <div className="flex-nama">
        <strong>{nama}</strong>
        <span> {angsuran}</span>
        <p> {tanggal}</p>
      </div>
      <div className="flex-alamat">
        <span> {alamat}</span>
        <p> {sobekan}</p>
      </div>
    </div>
  );
};

export default Anggota;
