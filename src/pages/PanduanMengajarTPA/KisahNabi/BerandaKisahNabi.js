import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaHafalanSuratPendek = () => {
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-between">
            <div></div>
            {/* <i className="bx bx-menu-alt-left text-[30px]"></i> */}
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Hafalan</h1>
            <p className="text-[25px] font-bold mb-[15px]">Surat Pendek</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Nabi Adam</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Falaq</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Ikhlas</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Lahab</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">An-Nasr</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Kafirun</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Kautsar</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Maun</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Quraisy</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Fil</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Humazah</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">Al-Asr</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px] mb-[30px]">
            <NavLink to="">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black ">
                <h1 className="text-[23px] font-bold text-center text-black ml-5">At-Takasur</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaHafalanSuratPendek;
