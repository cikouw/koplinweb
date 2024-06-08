import React from "react";
import "./Nasabah.css";

const Anggota = ({
  sobekan,
  nama,
  alamat,
  jenis,
  status,
  angsuran,
  tanggal,
}) => {
  return (
    <>
      <div class="anggota">
        <div class="flex-row">
          <div class="flex-column-satu">
            <p>{sobekan}</p>
            <div class="flex-column-dua">
              <strong>{nama}</strong>
              <span>{alamat}</span>
            </div>
          </div>
          <div class="flex-column-tiga">
            <div class="jenis">
              <p>Jenis</p>
              <span>{jenis}</span>
            </div>
            <div class="status">
              <p>Status</p>
              <span>{status}</span>
            </div>
          </div>
          <div class="flex-column-empat">
            <strong>{angsuran}</strong>
            <p>{tanggal}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anggota;
