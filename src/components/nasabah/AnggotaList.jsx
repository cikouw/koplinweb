import React from "react";
import "./Nasabah.css";
import { Anggota } from "../../components";

const AnggotaList = ({ anggotas }) => {
  return (
    <>
      {anggotas.map((anggota) => (
        <Anggota
          key={anggota.id}
          nama={anggota.nama}
          angsuran={anggota.angsuran}
          tanggal={anggota.tanggal}
          alamat={anggota.alamat}
          sobekan={anggota.sobekan}
        />
      ))}
    </>
  );
};

export default AnggotaList;
