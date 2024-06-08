import React from "react";
import { Anggota } from "../../components";

const AnggotaList = ({ anggotas }) => {
  return (
    <>
      {anggotas.map((anggota) => (
        <Anggota
          key={anggota.id}
          foto={anggota.foto}
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
