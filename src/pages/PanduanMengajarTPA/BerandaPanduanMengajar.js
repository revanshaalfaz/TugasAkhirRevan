import React from "react";
import AuthenticatedUser from "../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaPanduanmengajar = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Modul Panduan Mengajar</h1>
            <p className="text-[35px] font-bold mb-[15px]">TPA</p>
          </div>
        </div>
        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaTajwidMakhraj">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/iconTajwid.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-2" />
              <h1 className="text-[22px] font-bold text-center text-black">Tajwid dan Makhraj</h1>
            </div>
          </NavLink>
        </div>

        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaHafalanSuratPendek">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/iconQuran.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-2" />
              <h1 className="text-[22px] font-bold text-center text-black">Hafalan Surat Pendek</h1>
            </div>
          </NavLink>
        </div>

        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaDoa">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/iconDoa.png" className="w-[60px] h-[60px] rounded-full ml-3 mr-3" />
              <h1 className="text-[22px] font-bold text-center text-black">Doa Sehari-hari</h1>
            </div>
          </NavLink>
        </div>

        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaRukunImanIslam">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/iconRukun.png" className="w-[55px] h-[55px] rounded-full ml-3 mr-3" />
              <h1 className="text-[22px] font-bold text-center text-black">Rukun Islam dan Iman</h1>
            </div>
          </NavLink>
        </div>

        <div className="px-[15px] mt-[30px]">
          <NavLink to="/BerandaWudhuSholat">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/iconSholat.png" className="w-[55px] h-[55px] rounded-full ml-3 mr-3" />
              <h1 className="text-[22px] font-bold text-center text-black">Wudhu dan Sholat</h1>
            </div>
          </NavLink>
        </div>

        <div className="px-[15px] mt-[30px] mb-[100px]">
          <NavLink to="/BerandaKisahNabi">
            <div className="flex items-center justify-left bg-[#ffffff] rounded-[24px] h-[100px] p-4 shadow-md shadow-black">
              <img alt="keuangan" src="/images/iconNabi.png" className="w-[70px] h-[70px] rounded-full ml-2 mr-1" />
              <h1 className="text-[22px] font-bold text-center text-black">Kisah Nabi-Nabi</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaPanduanmengajar;
