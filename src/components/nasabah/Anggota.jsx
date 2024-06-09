import React from "react";
import "./Nasabah.css";

const Anggota = ({
  sobekan,
  nama,
  jenis,
  alamat,
  status,
  angsuran,
  tanggal,
}) => {
  return (
    <>
      <div class="anggota">
        <div class="flex-row">
          <div class="flex-satu">
            <span class="sobekan">{sobekan}</span>
            <div class="flex-column-satu">
              <div class="flex-kiri">
                <strong>{nama}</strong>
                <span>{jenis}</span>
              </div>
              <span>{alamat}</span>
            </div>
          </div>
          <div class="flex-dua">
            <span>{status}</span>
          </div>
          <div class="flex-column-dua">
            <strong>{angsuran}</strong>
            <span>{tanggal}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anggota;
