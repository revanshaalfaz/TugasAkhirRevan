import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClockComponent from "../components/ClockComponents";
import BoxPengeluaran from "../components/BoxPengeluaran";
import BoxSaldo from "../components/BoxSaldo";
import BoxPemasukan from "../components/BoxPemasukan";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { ref, set } from "firebase/database";
import Swal from "sweetalert2";
import { database } from "../Database/Fire";
import AuthenticatedUser from "../../src/Layouts/Authenticated";

const KelolaKeuangan = ({ dataKeuanganPemasukan, dataKeuanganPengeluaran }) => {
  const navigate = useNavigate();
  // console.log("data keuangan: ", dataKeuanganPemasukan);
  // console.log("data keuangan: ", dataKeuanganPengeluaran);
  let totalPemasukan = 0;
  let totalPengeluaran = 0;
  let totalSaldo = 0;

  //hitung total pemasukan
  if (dataKeuanganPemasukan) {
    Object.keys(dataKeuanganPemasukan).forEach((key) => {
      totalPemasukan += parseFloat(dataKeuanganPemasukan[key].nominalPemasukan) || 0;
    });
  }

  //hitung total pengeluaran
  if (dataKeuanganPengeluaran) {
    Object.keys(dataKeuanganPengeluaran).forEach((key) => {
      totalPengeluaran += parseFloat(dataKeuanganPengeluaran[key].nominalPengeluaran) || 0;
    });
  }

  //hitung total saldo
  totalSaldo = totalPemasukan - totalPengeluaran;

  localStorage.setItem("totalSaldo", totalSaldo);

  // Mengubah total menjadi format mata uang Rupiah
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const formattedPemasukan = formatter.format(totalPemasukan);
  const formattedPengeluaran = formatter.format(totalPengeluaran);
  const formattedSaldo = formatter.format(totalSaldo);
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5]">
        <div className="rounded-b-[30px] bg-[#0C8F8F] px-[24px] pb-[12px] shadow-md shadow-black">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <h1 className="text-[32px] mt-[5px] font-semibold text-center">Catatan Keuangan</h1>
          <h1 className="text-[20px] mt-[10px] text-center font-medium ">
            <ClockComponent />
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 gap-[20px] mt-[57px] px-[47px] gap-[30px]">
          <BoxSaldo judul="Saldo Keuangan Masjid" nominal={formattedSaldo} />
          <BoxPemasukan judul="Pemasukan" nominal={formattedPemasukan} />
          <BoxPengeluaran judul="Pengeluaran" nominal={formattedPengeluaran} />
          <NavLink to="/BerandaTambahCatatan">
            <div className="flex justify-center">
              <Button text="Tambah Catatan" gap="gap-[5px]" color="w-[220px] bg-[#357AFF] shadow shadow-md shadow-black mb-[37px]" />
            </div>
            {/* <Button text="Lacak Kotak Infak" image={<i className="text-[30px] bx bxs-map"></i>} gap="gap-[5px]" color="w-[220px] bg-[#FF4D58] shadow shadow-md shadow-black mb-[37px]" /> */}
          </NavLink>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default KelolaKeuangan;
