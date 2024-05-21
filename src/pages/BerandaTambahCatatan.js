import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaTambahCatatan = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Tambah</h1>
            <p className="text-[25px] font-bold mb-[15px]">Catatan Keuangan</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[20px]">
            <NavLink to="/pemasukan">
              <div className="w-full px-[27px] py-[15px] bg-[#0C8F8F] rounded-[20px] shadow-md shadow-gray-500">
                <h1 className="text-[25px] font-bold text-center text-white">Tambah</h1>
                <h1 className="text-[25px] font-bold text-center text-white">Pemasukan</h1>
              </div>
            </NavLink>
          </div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/pengeluaran">
              <div className="w-full px-[27px] py-[15px] bg-[#E93B3B] rounded-[20px] shadow-md shadow-gray-500">
                <h1 className="text-[25px] font-bold text-center text-white">Tambah</h1>
                <h1 className="text-[25px] font-bold text-center text-white">Pengeluaran</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaTambahCatatan;
