import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { ref, set } from "firebase/database";
import { database } from "../Database/Fire";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormPemasukan = ({ dataUser }) => {
  const navigate = useNavigate();
  const [kategoriPemasukan, setKategoriPemasukan] = useState("");
  const [namaPemasukan, setNamaPemasukan] = useState("");
  const [nominalPemasukan, setNominalPemasukan] = useState("");
  const [tanggalPemasukan, setTanggalPemasukan] = useState("");
  const uid = uuidv4();

  const formatRupiah = (angka) => {
    return angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleNominalChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNominalPemasukan(formatRupiah(value));
  };

  const handleSavePemasukan = () => {
    const formattedNominal = nominalPemasukan.replace(/\./g, "");
    set(ref(database, `databaseKeuangan/pemasukan/${uid}`), {
      uid: uid,
      kategoriPemasukan,
      namaPemasukan,
      nominalPemasukan: formattedNominal, // remove dots before saving to database
      tanggalPemasukan,
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
        <h1 className="text-[25px] mt-[5px] mb-[10px] font-semibold text-center">Catatan Pemasukan</h1>
      </div>
      <div className="px-[24px] mt-[40px]">
        <div>
          <Label forInput="tanggal_pemasukan" value="Tanggal Pemasukan" text="text-black font-semibold text-lg" />
          <TextInput
            color="black"
            type="date"
            name="tanggal_pemasukan"
            autoComplete="username"
            isFocused={true}
            value={tanggalPemasukan}
            onChange={(e) => setTanggalPemasukan(e.target.value)}
            placeholder="Masukan Tanggal"
            border="border-[#7C7C7C]"
          />
        </div>

        <div>
          <Label forInput="kategori_pemasukan" value="Kategori Pemasukan" text="text-black font-semibold mt-[20px] text-lg" />
          <select
            value={kategoriPemasukan}
            onChange={(e) => setKategoriPemasukan(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            style={{ marginTop: "10px", color: "black", backgroundColor: "#ebf3f3" }}
          >
            <option value="">Pilih Kategori</option>
            <option value="Kotak Infak">Kotak Infak</option>
            <option value="Zakat Maal">Zakat Maal</option>
            <option value="Shadaqah">Shadaqah</option>
            <option value="Waqaf">Waqaf</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <Label forInput="nama_pemasukan" value="Nama Pemasukan" text="text-black font-semibold mt-[20px] text-lg" />
          <TextInput
            color="black"
            type="name"
            name="nama_pemasukan"
            autoComplete="username"
            isFocused={true}
            value={namaPemasukan}
            onChange={(e) => setNamaPemasukan(e.target.value)}
            placeholder="Masukan Nama Pemasukan"
            border="border-[#7C7C7C]"
          />
        </div>

        <div>
          <Label forInput="nominalPemasukan" value="Nominal Pemasukan" text="text-black font-semibold mt-[20px] text-lg" />
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 mr-5">Rp.</span>
            <TextInput
              color="black"
              type="text"
              name="nominalPemasukan"
              autoComplete="username"
              isFocused={true}
              value={nominalPemasukan}
              onChange={handleNominalChange}
              placeholder="   Masukan Nominal Pemasukan"
              border="border-[#7C7C7C] pl-[30px]"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button text="Masukan" gap="gap-[5px]" color="w-[200px] bg-[#357AFF] shadow shadow-md shadow-black mb-[15px] mt-[30px]" onClick={handleSavePemasukan} />
        </div>
      </div>
      <div className="flex text-black justify-center items-center h-[55px] mt-[18px]"> </div>
    </div>
  );
};

export default FormPemasukan;
