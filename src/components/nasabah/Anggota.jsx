import React from "react";
import "./Nasabah.css";

const Anggota = ({ nama, angsuran, tanggal, alamat, sobekan }) => {
  return (
    <div className="anggota">
      <div className="flex-atas">
        <strong>{nama}</strong>
        <div className="flex-angsuran">
          <span> {angsuran}</span>
          <p> {tanggal}</p>
        </div>
      </div>
      <div className="flex-bawah">
        <span> {alamat}</span>
        <p> {sobekan}</p>
      </div>
    </div>
  );
};

export default Anggota;
