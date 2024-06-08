import React from "react";
import { Anggota } from "../../components";

const AnggotaList = ({ anggotas }) => {
  return (
    <>
      {anggotas.map((anggota) => (
        <Anggota
          key={anggota.id}
          sobekan={anggota.sobekan}
          nama={anggota.nama}
          alamat={anggota.alamat}
          jenis={anggota.jenis}
          status={anggota.status}
          angsuran={anggota.angsuran}
          tanggal={anggota.tanggal}
        />
      ))}
    </>
  );
};

export default AnggotaList;
