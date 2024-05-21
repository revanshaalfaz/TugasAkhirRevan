import React from "react";
import { ScrollView } from "react";
import AuthenticatedUser from "../../../Layouts/Authenticated";
import { NavLink, useNavigate } from "react-router-dom";

const BerandaHafalanSuratPendek = () => {
  const navigate = useNavigate();
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] overflow-y-auto">
        <div className="rounded-b-[40px] bg-[#0C8F8F] px-[24px]">
          <div className="flex justify-start">
            <i className="bx bx-chevron-left text-[30px]" onClick={() => navigate(-1)}></i>
          </div>
          <div className="flex flex-col items-center my-[46px]">
            <h1 className="text-[25px] font-semibold mb-[5px] mt-[-35px]">Hafalan</h1>
            <p className="text-[25px] font-bold mb-[15px]">Surat Pendek</p>
          </div>
        </div>
        <div>
          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AnNas">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon1.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">An-Nas</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlFalaq">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon2.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Falaq</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlIkhlas">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon3.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Ikhlas</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlLahab">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon4.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Lahab</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AnNasr">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon5.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">An-Nasr</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlKafirun">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon6.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Kafirun</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlKautsar">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon7.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Kautsar</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlMaun">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon8.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Maun</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlQuraisy">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon9.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Quraisy</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlFil">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon10.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Fil</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlHumazah">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon11.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Humazah</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px]">
            <NavLink to="/AlAsr">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black">
                <img alt="" src="/images/icon12.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">Al-Asr</h1>
              </div>
            </NavLink>
          </div>

          <div className="px-[15px] mt-[30px] mb-[100px]">
            <NavLink to="/AtTakasur">
              <div className="flex items-center justify-cener bg-[#ffffff] rounded-[24px] h-[70px] p-4 shadow-md shadow-black ">
                <img alt="" src="/images/icon13.png" className="w-[50px] h-[50px] rounded-full ml-2" />
                <h1 className="text-[23px] font-bold text-center text-black ml-2">At-Takasur</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default BerandaHafalanSuratPendek;
