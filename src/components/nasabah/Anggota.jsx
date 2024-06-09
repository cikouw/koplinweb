// Anggota.js
import React from "react";
import "./Nasabah.css";
import { Link } from "react-router-dom";

const Anggota = ({
  id,
  sobekan,
  nama,
  jenis,
  alamat,
  status,
  angsuran,
  tanggal,
}) => {
  return (
    <Link to={`/detail_angsuran/${id}`} className="link-angsuran">
      <div className="anggota">
        <div className="flex-row">
          <div className="flex-satu">
            <span className="sobekan">{sobekan}</span>
            <div className="flex-column-satu">
              <div className="flex-kiri">
                <strong>{nama}</strong>
                <span>{jenis}</span>
              </div>
              <span>{alamat}</span>
            </div>
          </div>
          <div className="flex-dua">
            <span>{status}</span>
          </div>
          <div className="flex-column-dua">
            <strong>{angsuran}</strong>
            <span>{tanggal}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Anggota;
