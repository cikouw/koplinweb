import React from "react";
import "./Nasabah.css";

const Anggota = ({ foto, nama, angsuran, tanggal, alamat, sobekan }) => {
  return (
    <>
      <div className="anggota">
        <div className="flex-row">
          <div className="flex-column-satu">
            <img src={foto} alt={nama} />
            <div className="flex-column-dua">
              <strong>{nama}</strong>
              <span>{alamat}</span>
            </div>
          </div>
          <div className="flex-column-tiga">
            <strong>{angsuran}</strong>
          </div>
          <div className="flex-column-empat">
            <span>{tanggal}</span>
            <p>{sobekan}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anggota;
