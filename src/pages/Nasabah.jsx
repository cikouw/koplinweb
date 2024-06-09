import React from "react";
import { BottomTab, TopTab, AnggotaList, Footer } from "../components";
import { useState, useEffect } from "react";

const Nasabah = () => {
  const dummyNasabah = [
    {
      id: 1,
      sobekan: "t",
      nama: "Nael Saruksuk",
      jenis: "t",
      alamat: "cikarang utara",
      status: "Lancar",
      angsuran: "5.000.000",
      tanggal: "24 des 1999",
    },
    {
      id: 2,
      sobekan: "2",
      nama: "ayu",
      jenis: "h",
      alamat: "BKI",
      status: "Lancar",
      angsuran: "150.000",
      tanggal: "9 Jun",
    },
    {
      id: 3,
      sobekan: "4",
      nama: "Anim",
      jenis: "h",
      alamat: "Pelaukan",
      status: "Lancar",
      angsuran: "35.000",
      tanggal: "9 Jun",
    },
    {
      id: 4,
      sobekan: "17",
      nama: "Enih",
      jenis: "h",
      alamat: "Pelaukan",
      status: "Lancar",
      angsuran: "20.000",
      tanggal: "9 Jun",
    },
    {
      id: 5,
      sobekan: "11",
      nama: "Erna",
      jenis: "h",
      alamat: "Pelaukan",
      status: "Lancar",
      angsuran: "15.000",
      tanggal: "9 Jun",
    },
    {
      id: 6,
      sobekan: "15",
      nama: "Nenek",
      jenis: "m",
      alamat: "Pule",
      status: "Lancar",
      angsuran: "40.000",
      tanggal: "8 Jun",
    },
    {
      id: 7,
      sobekan: "8",
      nama: "Ani",
      jenis: "h",
      alamat: "Pule",
      status: "Lancar",
      angsuran: "15.000",
      tanggal: "8 Jun",
    },
    {
      id: 8,
      sobekan: "22",
      nama: "Nia",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Lancar",
      angsuran: "25.000",
      tanggal: "7 Jun",
    },
    {
      id: 9,
      sobekan: "14",
      nama: "Opung",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Lancar",
      angsuran: "25.000",
      tanggal: "7 Jun",
    },
    {
      id: 10,
      sobekan: "5",
      nama: "Dalisah",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Lancar",
      angsuran: "10.000",
      tanggal: "6 Jun",
    },
    {
      id: 12,
      sobekan: "6",
      nama: "Apupah",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Lancar",
      angsuran: "30.000",
      tanggal: "6 Jun",
    },
    {
      id: 13,
      sobekan: "9",
      nama: "Umdah",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Lancar",
      angsuran: "50.000",
      tanggal: "6 Jun",
    },
    {
      id: 14,
      sobekan: "12",
      nama: "Asiah",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Lancar",
      angsuran: "75.000",
      tanggal: "6 Jun",
    },
    {
      id: 15,
      sobekan: "16",
      nama: "Marni",
      jenis: "h",
      alamat: "Pulo Bambu",
      status: "Sedang",
      angsuran: "250.000",
      tanggal: "5 Jun",
    },
    {
      id: 16,
      sobekan: "7",
      nama: "Lulu",
      jenis: "h",
      alamat: "Pilar Barat",
      status: "Lancar",
      angsuran: "20.000",
      tanggal: "5 Jun",
    },
    {
      id: 17,
      sobekan: "10",
      nama: "Atih",
      jenis: "h",
      alamat: "Pilar Barat",
      status: "Lancar",
      angsuran: "15.000",
      tanggal: "5 Jun",
    },
    {
      id: 18,
      sobekan: "13",
      nama: "Sri",
      jenis: "h",
      alamat: "Pilar Barat",
      status: "Lancar",
      angsuran: "10.000",
      tanggal: "5 Jun",
    },
    {
      id: 19,
      sobekan: "20",
      nama: "Yuli",
      jenis: "h",
      alamat: "Teleng",
      status: "Lancar",
      angsuran: "40.000",
      tanggal: "4 Jun",
    },
    {
      id: 20,
      sobekan: "18",
      nama: "Susanti",
      jenis: "h",
      alamat: "Teleng",
      status: "Lancar",
      angsuran: "10.000",
      tanggal: "4 Jun",
    },
  ];
  const [totalAnggota, setTotalAnggota] = useState(0);
  const [totalAngsuran, setTotalAngsuran] = useState(0);

  useEffect(() => {
    setTotalAnggota(dummyNasabah.length);
    const total = dummyNasabah.reduce((sum, anggota) => {
      const amount = parseInt(anggota.angsuran.replace(/\D/g, ""));
      return sum + amount;
    }, 0);
    setTotalAngsuran(total);
  }, [dummyNasabah]);
  return (
    <>
      <TopTab totalAnggota={totalAnggota} totalAngsuran={totalAngsuran} />
      <AnggotaList anggotas={dummyNasabah} />
      <Footer />
      <BottomTab />
    </>
  );
};

export default Nasabah;
