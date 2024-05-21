import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { ref, set } from "firebase/database";
import { database } from "../Database/Fire";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormPengeluaran = ({ dataUser }) => {
  const navigate = useNavigate();
  const [kategoriPengeluaran, setKategoriPengeluaran] = useState("");
  const [namaPengeluaran, setNamaPengeluaran] = useState("");
  const [nominalPengeluaran, setNominalPengeluaran] = useState("");
  const [tanggalPengeluaran, setTanggalPengeluaran] = useState("");
  const uid = uuidv4();

  const handleSavePengeluaran = () => {
    set(ref(database, `databaseKeuangan/pengeluaran/${uid}`), {
      uid: uid,
      kategoriPengeluaran,
      namaPengeluaran,
      nominalPengeluaran,
      tanggalPengeluaran,
      username: dataUser.name,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Success",
        color: "#000",
        buttonsStyling: true,
        confirmButtonColor: "#006A0B",
        text: "Berhasil Membuat Catatan",
      });
      navigate("/keuangan");
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#EFF2F6] justify-center">
      <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
        <div className="flex justify-start">
          <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
        </div>
        <h1 className="text-[25px] mt-[5px] mb-[10px] font-semibold text-center">Catatan Pengeluaran</h1>
      </div>
      <div className="px-[24px] mt-[40px]">
        <div>
          <Label forInput="tanggal_pengeluaran" value="Tanggal Pengeluaran" text="text-black font-semibold text-lg" />
          <TextInput
            color="black"
            type="date"
            name="tanggal_pengeluaran"
            autoComplete="username"
            isFocused={true}
            value={tanggalPengeluaran}
            onChange={(e) => setTanggalPengeluaran(e.target.value)}
            placeholder="Masukan Tanggal"
            border="border-[#7C7C7C]"
          />
        </div>

        <div>
          <Label forInput="kategori_pengeluaran" value="Kategori Pengeluaran" text="text-black font-semibold mt-[20px] text-lg" />
          <select
            value={kategoriPengeluaran}
            onChange={(e) => setKategoriPengeluaran(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            style={{ marginTop: "10px", color: "black", backgroundColor: "#ebf3f3" }}
          >
            <option value="">Pilih Kategori</option>
            <option value="Operasional Masjid">Operasional Masjid</option>
            <option value="Inventaris Masjid">Inventaris Masjid</option>
            <option value="Shodaqoh / Santunan">Shodaqoh / Santunan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <Label forInput="nama_pengeluaran" value="Nama Pengeluaran" text="text-black font-semibold mt-[20px] text-lg" />
          <TextInput
            color="black"
            type="name"
            name="nama_pengeluaran"
            autoComplete="username"
            isFocused={true}
            value={namaPengeluaran}
            onChange={(e) => setNamaPengeluaran(e.target.value)}
            placeholder="Masukan Nama Pengeluaran"
            border="border-[#7C7C7C]"
          />
        </div>

        <div>
          <Label forInput="nominalPengeluaran" value="Nominal Pengeluaran" text="text-black font-semibold mt-[20px] text-lg" />
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 mr-5">Rp.</span>
            <TextInput
              color="black"
              type="number"
              name="nominalPengeluaran"
              autoComplete="username"
              isFocused={true}
              value={nominalPengeluaran}
              onChange={(e) => setNominalPengeluaran(e.target.value)}
              placeholder="   Masukan Nominal Pengeluaran"
              border="border-[#7C7C7C] pl-[30px]"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button text="Masukan" gap="gap-[5px]" color="w-[200px] bg-[#357AFF] shadow shadow-md shadow-black mb-[15px] mt-[30px]" onClick={handleSavePengeluaran} />
        </div>
      </div>
      <div className="flex text-black justify-center items-center h-[55px] mt-[18px]"> </div>
    </div>
  );
};

export default FormPengeluaran;
