import React from "react";
import "./form.css";

const FormulirDrop = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan operasi tambahan di sini, seperti mengirimkan data ke backend
    console.log("Form submitted!");
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Data Nasabah</legend>
        <div className="form-group">
          <label htmlFor="jenis">Jenis Pinjaman</label>
          <select id="jenis" name="jenis" required>
            <option value="">Pilih Jenis Pinjaman</option>
            <option value="Harian">Harian</option>
            <option value="Tempoan">Tempoan</option>
            <option value="Mingguan">Mingguan</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Nama"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="alamat">Alamat</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Alamat"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pinjaman">Pinjaman (Rp)</label>
          <input
            type="number"
            id="pinjaman"
            name="pinjaman"
            placeholder="Masukkan jumlah pinjaman"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="angsuran">Angsuran (Rp)</label>
          <input
            type="number"
            id="angsuran"
            name="angsuran"
            placeholder="Masukkan jumlah angsuran"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tanggal">Tanggal</label>
          <input
            type="date"
            id="tanggal"
            name="tanggal"
            placeholder="01/01/2024"
            required
          />
        </div>
      </fieldset>

      <button type="submit">Tambah Nasabah</button>
    </form>
  );
};

export default FormulirDrop;
