import React from "react";
import "./Nasabah.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(`/detail_angsuran/${id}`);
    }, 300); // Delay 0,3 detik sebelum navigasi
  };

  return (
    <div className="link-angsuran" onClick={handleClick}>
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
    </div>
  );
};

export default Anggota;
