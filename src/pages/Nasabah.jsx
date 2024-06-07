import React from "react";
import { BottomTab, TopTab, AnggotaList } from "../components";

const Nasabah = () => {
  const dummyNasabah = [
    {
      id: 1,
      nama: "Ayu",
      angsuran: "150 ribu",
      tanggal: "9 Jun",
      alamat: "Perumahan BKI",
      sobekan: "2",
    },
    {
      id: 2,
      nama: "Rahayu",
      angsuran: "25 ribu",
      tanggal: "9 Jun",
      alamat: "Pelaukan",
      sobekan: "17",
    },
    {
      id: 3,
      nama: "Lestari",
      angsuran: "10 ribu",
      tanggal: "9 Jun",
      alamat: "Pelaukan",
      sobekan: "6",
    },
    {
      id: 4,
      nama: "Elsa",
      angsuran: "35 ribu",
      tanggal: "9 Jun",
      alamat: "Pelaukan",
      sobekan: "8",
    },
    {
      id: 5,
      nama: "Kurnia",
      angsuran: "100 ribu",
      tanggal: "9 Jun",
      alamat: "Pelaukan",
      sobekan: "10",
    },
    {
      id: 6,
      nama: "Nia",
      angsuran: "25 ribu",
      tanggal: "9 Jun",
      alamat: "Pelaukan",
      sobekan: "2",
    },
    {
      id: 7,
      nama: "Putri",
      angsuran: "15 ribu",
      tanggal: "8 Jun",
      alamat: "Pule",
      sobekan: "16",
    },
    {
      id: 8,
      nama: "Desi",
      angsuran: "10 ribu",
      tanggal: "8 Jun",
      alamat: "Pule",
      sobekan: "22",
    },
    {
      id: 9,
      nama: "Syariah",
      angsuran: "50 ribu",
      tanggal: "8 Jun",
      alamat: "Pule",
      sobekan: "12",
    },
    {
      id: 10,
      nama: "Rohimah",
      angsuran: "60 ribu",
      tanggal: "8 Jun",
      alamat: "Pule",
      sobekan: "13",
    },
    {
      id: 11,
      nama: "Rohayati",
      angsuran: "10 ribu",
      tanggal: "8 Jun",
      alamat: "Pule",
      sobekan: "9",
    },
    {
      id: 12,
      nama: "Lulu",
      angsuran: "10 ribu",
      tanggal: "7 Jun",
      alamat: "Pilar",
      sobekan: "5",
    },
    {
      id: 13,
      nama: "Susanti",
      angsuran: "10 ribu",
      tanggal: "7 Jun",
      alamat: "Teleng",
      sobekan: "3",
    },
    {
      id: 14,
      nama: "Yuli",
      angsuran: "40 ribu",
      tanggal: "7 Jun",
      alamat: "Teleng",
      sobekan: "4",
    },
    {
      id: 15,
      nama: "Yati",
      angsuran: "15 ribu",
      tanggal: "6 Jun",
      alamat: "Teleng",
      sobekan: "8",
    },
    {
      id: 17,
      nama: "Evi",
      angsuran: "10 ribu",
      tanggal: "6 Jun",
      alamat: "Teleng",
      sobekan: "2",
    },
    {
      id: 18,
      nama: "Asun",
      angsuran: "20 ribu",
      tanggal: "5 Jun",
      alamat: "Karang Baru",
      sobekan: "11",
    },
    {
      id: 19,
      nama: "Nael",
      angsuran: "100 ribu",
      tanggal: "24 Des",
      alamat: "Puri Nirwana",
      sobekan: "1",
    },
  ];

  return (
    <>
      <TopTab />
      <AnggotaList anggotas={dummyNasabah} />
      <BottomTab />
    </>
  );
};

export default Nasabah;
