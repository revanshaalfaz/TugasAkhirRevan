import React from "react";
import AuthenticatedUser from "../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaLaporanKeuangan = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Laporan</h1>
            <p className="text-[25px] font-bold mb-[15px]">Keuangan Masjid</p>
          </div>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/TabelPemasukan">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/tabelmasuk.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-5" />
              <h1 className="text-[24px] font-bold text-left text-black">Tabel Pemasukan</h1>
            </div>
          </NavLink>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/TabelPengeluaran">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/tabelkeluar.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-5" />
              <h1 className="text-[24px] font-bold text-left text-black">Tabel Pengeluaran</h1>
            </div>
          </NavLink>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/GrafikPemasukan">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/grafikpemasukan.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-5" />
              <h1 className="text-[24px] font-bold text-left text-black">Grafik Pemasukan</h1>
            </div>
          </NavLink>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaTajwidMakhraj">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/grafikpengeluaran.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-5" />
              <h1 className="text-[24px] font-bold text-left text-black">Grafik Pengeluaran</h1>
            </div>
          </NavLink>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaTajwidMakhraj">
            <div className="flex items-center justify-center bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <h1 className="text-[24px] font-bold text-center text-black">Grafik Keseluruhan</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaLaporanKeuangan;
